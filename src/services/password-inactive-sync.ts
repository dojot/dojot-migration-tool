import { DojotSyncronizer } from "./dojot-syncronizer";
import { PasswordInactive } from "../entity/PasswordInactive";

export class PasswordInactiveSync extends DojotSyncronizer {
  async run() {
    const passwords = await this.oldDB.getRepository(PasswordInactive).find();
    await this.newDB.save(passwords);
  }
}
