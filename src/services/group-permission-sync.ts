import { EntityManager, Equal, In, Not } from "typeorm";
import { User } from "../entity/User";
import { DojotSyncronizer } from "./dojot-syncronizer";
import axios from "axios";
import { Group } from "../entity/Group";
import { GroupPermission } from "../entity/GroupPermission";

export class GroupPermissionSync extends DojotSyncronizer {
  async run() {
    const permissions = await this.oldDB.getRepository(GroupPermission).find();
    this.newDB.save(permissions);
  }
}
