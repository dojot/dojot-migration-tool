import { DojotSyncronizer } from "./dojot-syncronizer";
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
