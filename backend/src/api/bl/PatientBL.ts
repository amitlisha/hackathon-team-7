import { getRepository } from "typeorm";
import { Patient } from "../entities/Patient";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export class PatientBL {
    public static async getAll(currentUser: User) {
        const patientRepository = getRepository(Patient);
        console.log(currentUser)

        const patients = await patientRepository
            .createQueryBuilder('patient')
            .leftJoin('patient.therapists', 'therapists')
            .where('therapists.id = :userId', { userId: currentUser.id })
            .getMany();

        return patients;
    }

    public static async addUser(userId: number, patientId: number) {
        const groupRepository = getRepository(Patient);

        groupRepository.createQueryBuilder()
            .relation(Patient, 'therapists')
            .of({ id: patientId })
            .add({ id: userId })
    }
}