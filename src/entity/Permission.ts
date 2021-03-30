import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Permission {

    @PrimaryColumn()
    id: number;

    @Column()
    path: string;

    @Column()
    name: string;

    @Column()
    method: string;

    @Column()
    permission: string;

    @Column()
    type: string;

    @Column({name: "created_date"})
    createdDate: Date;

    @Column({name: "created_by"})
    createdBy: Date;

}
