import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({name: "passwd_inactive"})
export class PasswordInactive {

    @PrimaryColumn({name: "inactive_id"})
    id: number;

    @Column({name: "user_id"})
    userId: string;

    @Column()
    hash: string;

    @Column()
    salt: string;

    @Column({name: "deletion_date"})
    deletionDate: Date;

}
