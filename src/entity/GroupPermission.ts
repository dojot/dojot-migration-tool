import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({ name: "group_permission" })
export class GroupPermission{
  
  @PrimaryColumn({ name: "permission_id" })
  permissionId: number;

  @PrimaryColumn({ name: "group_id" })
  groupId: number;
}
