import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Attendance } from './Attendance';
import { Patient } from './Patient';
import { Role } from './Role';
import { Unit } from './Unit';
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

  @Column()
  isParent: boolean;

  @ManyToMany(() => Patient)
  @JoinTable()
  patients?: Patient[];
}
