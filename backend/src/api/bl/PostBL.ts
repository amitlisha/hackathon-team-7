import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export class PostBL {
  public static async savePost(
    title: string,
    content: string,
    patientId: number
  ) {
    const postRepository = getRepository(Post);

    return await postRepository.save({
      title,
      content,
      date: new Date(),
      patient: { id: patientId },
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

    console.log(
      await postRepository
        .createQueryBuilder("post")
        .select()
        .leftJoinAndSelect("post.patient", "patient")
        .getMany()
    );

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
}
