import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Document } from './Document';
import { Group } from './Group';

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToMany(() => Document)
    @JoinTable()
    documents: Document[]

    @ManyToMany(() => Group)
    @JoinTable()
    groups: Group[]
}
