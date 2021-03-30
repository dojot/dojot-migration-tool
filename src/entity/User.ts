import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  service: string;

  @Column()
  email: string;

  @Column()
  profile: string;

  @Column()
  hash: string;

  @Column()
  salt: string;

  @Column()
  secret: string;

  @Column()
  key: string;

  @Column()
  kongId: string;

  @Column()
  created_date: Date;

  @Column()
  created_by: Date;
}
