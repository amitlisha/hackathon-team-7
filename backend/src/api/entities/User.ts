import {
  Column,
  Entity, JoinTable,
  ManyToMany, PrimaryColumn
} from 'typeorm';
import { Group } from './Group';
import { Patient } from './Patient';
@Entity('user')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToMany(() => Patient, (patient) => patient.therapists)
  @JoinTable()
  patients: Patient[];

  @ManyToMany(() => Group, (group) => group.users)
  @JoinTable()
  groups: Group[];
}
