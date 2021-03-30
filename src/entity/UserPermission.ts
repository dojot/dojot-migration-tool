import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({ name: "user_permission" })
export class UserPermission{
  
  @PrimaryColumn({ name: "permission_id" })
  permissionId: number;

  @PrimaryColumn({ name: "user_id" })
  userId: number;
}
