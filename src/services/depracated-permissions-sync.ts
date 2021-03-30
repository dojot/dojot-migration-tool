import { DojotSyncronizer } from "./dojot-syncronizer";
import { GroupPermission } from "../entity/GroupPermission";
import { Permission } from "../entity/Permission";
import { UserPermission } from "../entity/UserPermission";

export class DeprecatedPermissionsSync extends DojotSyncronizer {
  async run() {
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
      .from(UserPermission)
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
