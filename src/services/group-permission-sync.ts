import { EntityManager, Equal, In, Not } from "typeorm";
import { User } from "../entity/User";
import { DojotSyncronizer } from "./dojot-syncronizer";
import axios from "axios";
import { Group } from "../entity/Group";
import { GroupPermission } from "../entity/GroupPermission";
import { Permission } from "../entity/Permission";

export class GroupPermissionSync extends DojotSyncronizer {
  async run() {
    const permissions = await this.oldDB.getRepository(GroupPermission).find();
    await this.newDB.save(permissions);

    const sign = await this.newDB
      .getRepository(Permission)
      .createQueryBuilder()
      .where({
        path: "/sign/(.*)",
        name: "wo_sign",
        method: "POST",
      })
      .getOne();

    await this.newDB
      .createQueryBuilder()
      .delete()
      .from(GroupPermission)
      .where({
        permissionId: sign.id,
      })
      .execute();

    await this.newDB
      .createQueryBuilder()
      .delete()
      .from(Permission)
      .where({
        id: sign.id,
      })
      .execute();
  }
}
