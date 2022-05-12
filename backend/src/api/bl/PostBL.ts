import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export class PostBL {
  public static async savePost(
    title: string,
    content: string,
    patientId: number,
    userId: number
  ) {
    const postRepository = getRepository(Post);
    console.log("Hello");
    return await postRepository.save({
      title,
      content,
      date: new Date(),
      patient: { id: patientId },
      groups: [{ id: userId }],
    });
  }

  public static async getAll(patientId: number, currentUser: User) {
    const postRepository = getRepository(Post);
    const patientRepository = getRepository(Patient);
    console.log(patientId);
    const patient = await patientRepository.findOne({
      where: { id: patientId },
      relations: ["parent"],
    });
    console.log(patient);

    if (patient.parent.id === currentUser.id) {
      const posts = await postRepository.find({
        where: { patient: patientId },
      });
      return posts;
    }

    console.log("Hey");

    const data = await postRepository
      .createQueryBuilder("post")
      .select()
      .leftJoinAndSelect("post.patient", "patient")
      .leftJoinAndSelect("post.groups", "groups")
      .leftJoinAndSelect("groups.users", "users")
      .where("patient.id = :patientId", { patientId })
      .getMany();

    console.log(patientId);
    console.log(currentUser.id);
    console.log(data[0]);
    console.log(data[0].groups[0].users);

    const posts = await postRepository
      .createQueryBuilder("post")
      .select()
      .leftJoin("post.patient", "patient")
      .leftJoin("post.groups", "groups")
      .leftJoin("groups.users", "users")
      .where("users.id = :userId", { userId: currentUser.id })
      .andWhere("patient.id = :patientId", { patientId })
      .getMany();

    console.log(posts);

    return posts;
  }

  public static async removeGroup(postId: number, groupId: number) {
    const postRepository = getRepository(Post);

    const post = await postRepository.findOne(postId, {
      relations: ["groups"],
    });

    post.groups = post.groups.filter((group) => group.id !== groupId);
    return await postRepository.save(post);
  }
}
