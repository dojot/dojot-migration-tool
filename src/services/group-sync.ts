import { DojotSyncronizer } from "./dojot-syncronizer";
import { Group } from "../entity/Group";

export class GroupSync extends DojotSyncronizer {
  async run() {
    const groups = await this.oldDB.getRepository(Group).find();
    this.newDB.save(groups);
  }
}
