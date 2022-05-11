import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('document')
export class Document {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    s3Id: string;
}
