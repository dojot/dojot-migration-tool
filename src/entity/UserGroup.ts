import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({ name: "user_group" })
export class UserGroup {
  
  @PrimaryColumn({ name: "user_id" })
  userId: number;

  @PrimaryColumn({ name: "group_id" })
  groupId: number;
}
