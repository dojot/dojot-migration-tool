import { DojotSyncronizer } from "./dojot-syncronizer";
import { GroupPermission } from "../entity/GroupPermission";

export class GroupPermissionSync extends DojotSyncronizer {
  async run() {
    const permissions = await this.oldDB.getRepository(GroupPermission).find();
    await this.newDB.save(permissions);
  }  
}
