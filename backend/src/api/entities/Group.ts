import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from './Patient';
import { User } from './User';

@Entity('group')
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Patient, (patient) => patient.id)
    @JoinColumn({ name: 'patient_id', referencedColumnName: 'id' })
    patient: Patient;

    @ManyToMany(() => User, (user) => user.groups)
    users: User[]
}
