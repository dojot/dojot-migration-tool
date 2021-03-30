import { EntityManager, Equal, In, Not } from "typeorm";
import { User } from "../entity/User";
import { DojotSyncronizer } from "./dojot-syncronizer";
import axios from "axios";
import { Group } from "../entity/Group";

export class GroupSync extends DojotSyncronizer {
  async run() {
    const groups = await this.oldDB.getRepository(Group).find();
    this.newDB.save(groups);
  }
}
