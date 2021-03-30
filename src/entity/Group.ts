import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Group {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({name: "created_date"})
    createdDate: Date;

    @Column({name: "created_by"})
    createdBy: Date;

}
