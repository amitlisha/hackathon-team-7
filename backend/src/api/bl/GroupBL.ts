import { getRepository } from "typeorm";
import { Group } from "../entities/Group";
import { Patient } from "../entities/Patient";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export class GroupBL {
    public static async save(name: string, patientId: number, userIds: string[]) {
        const groupRepository = getRepository(Group);
        const users = userIds.map(userId => ({ id: userId }))

        const group = await groupRepository.save({ name, patient: { id: patientId }, users: users })

        // const patients = await patientRepository.find({ where: { therapists: { id: currentUser.id } } })

        return group;
    }

    public static async addUser(userId: number, groupId: number) {
        const groupRepository = getRepository(Group);
        console.log(groupId + ' ' + userId)

        groupRepository.createQueryBuilder()
            .relation(Group, 'users')
            .of({ id: groupId })
            .add({ id: userId })

    }
}