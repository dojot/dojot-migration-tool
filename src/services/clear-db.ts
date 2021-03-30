import { User } from "../entity/User";
import { DojotSyncronizer } from "./dojot-syncronizer";
import { Group } from "../entity/Group";
import { UserGroup } from "../entity/UserGroup";
import { GroupPermission } from "../entity/GroupPermission";
import { UserPermission } from "../entity/UserPermission";
import { Permission } from "../entity/Permission";

export class ClearDB extends DojotSyncronizer {
  async run() {
    await this.newDB.createQueryBuilder().delete().from(GroupPermission).execute();
    await this.newDB.createQueryBuilder().delete().from(UserPermission).execute();
    await this.newDB.createQueryBuilder().delete().from(Permission).execute();
    await this.newDB.createQueryBuilder().delete().from(UserGroup).execute();
    await this.newDB.createQueryBuilder().delete().from(User).execute();
    await this.newDB.createQueryBuilder().delete().from(Group).execute();
  }
}
