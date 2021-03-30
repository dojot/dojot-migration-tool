import { DojotSyncronizer } from "./dojot-syncronizer";
import { UserPermission } from "../entity/UserPermission";

export class UserPermissionSync extends DojotSyncronizer {
  async run() {
    const permissions = await this.oldDB.getRepository(UserPermission).find();
    await this.newDB.save(permissions);
  }
}
