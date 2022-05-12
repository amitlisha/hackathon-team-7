import { getRepository } from "typeorm";
import { Group } from "../entities/Group";

export class GroupBL {
    public static async save(name: string, patientId: number, userIds: string[]) {
        const groupRepository = getRepository(Group);
        const users = userIds.map(userId => ({ id: userId }))

        const group = await groupRepository.save({ name, patient: { id: patientId }, users: users })

        // const patients = await patientRepository.find({ where: { therapists: { id: currentUser.id } } })

        return group;
    }

    public static async delete(groupId: number) {
        const groupRepository = getRepository(Group);
        await groupRepository.delete(groupId);
    }

    public static async addUser(userId: number, groupId: number) {
        const groupRepository = getRepository(Group);

        groupRepository.createQueryBuilder()
            .relation(Group, 'users')
            .of({ id: groupId })
            .add({ id: userId })
    }

    public static async deleteUser(userId: string, groupId: number) {
        const groupRepository = getRepository(Group);

        const group = await groupRepository.findOne(groupId, { relations: ['users'] });

        group.users = group.users.filter(user => user.id !== userId)
        return await groupRepository.save(group);
    }
}