import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './Post';

@Entity('document')
export class Document {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    s3Id: string;

    @ManyToOne((type) => Post, (post) => post.id)
    @JoinColumn({ name: 'post_id', referencedColumnName: 'id' })
    post: Post;
}
