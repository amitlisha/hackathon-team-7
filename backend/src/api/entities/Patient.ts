import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('patient')
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'timestamp without time zone' })
    birthDate: Date;

    @ManyToOne((type) => User, (user) => user.id)
    @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
    parent: User;

    @ManyToMany(() => User, (user) => user.patients)
    therapists: User[];
}
