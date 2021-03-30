import { EntityManager, Equal, In, Not, QueryFailedError } from "typeorm";
import { User } from "../entity/User";
import { DojotSyncronizer } from "./dojot-syncronizer";
import axios from "axios";
import { Group } from "../entity/Group";
import { UserGroup } from "../entity/UserGroup";

export class UserGroupSync extends DojotSyncronizer {
  async run() {
    try {
      const userGroups = await this.oldDB.getRepository(UserGroup).find();
      this.newDB.save(userGroups);
    } catch (error) {
      console.log("User group already exists");
    }
  }
}
