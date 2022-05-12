import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Document } from './Document';
import { Group } from './Group';
import { Patient } from './Patient';

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    textInFiles: string;

    @Column({ type: 'timestamp without time zone' })
    date: Date;

    @OneToMany(() => Document, document => document.post)
    documents: Document[];

    @ManyToOne((type) => Patient, (patient) => patient.id)
    @JoinColumn({ name: 'patient_id', referencedColumnName: 'id' })
    patient: Patient;

    @ManyToMany(() => Group)
    @JoinTable()
    groups: Group[]
}
