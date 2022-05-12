import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export class PostBL {
    public static async savePost(title: string, content: string, patientId: number) {
        const postRepository = getRepository(Post);

        return await postRepository.save({ title, content, date: new Date(), patient: { id: patientId } });
    }

    public static async getAll(patientId: number, currentUser: User) {
        const postRepository = getRepository(Post);
        const patientRepository = getRepository(Patient);

        const patient = await patientRepository.findOne(patientId);

        if (patient.parent.id === currentUser.id) {
            const posts = await postRepository.find();
            return posts;
        }

        const posts = await postRepository.createQueryBuilder('post')
            .select()
            .leftJoin('post.patient', 'patient')
            .leftJoin('post.groups', 'groups')
            .leftJoin('groups.users', 'users')
            .where('users.id = :userId', { userId: currentUser.id })
            .where('patient.id = :patientId', { patientId })
            .getMany()

        return posts;
    }

    public static async removeGroup(postId: number, groupId: number) {
        const postRepository = getRepository(Post);

        const post = await postRepository.findOne(postId, { relations: ['groups'] });

        post.groups = post.groups.filter(group => group.id !== groupId)
        return await postRepository.save(post);
    }
}