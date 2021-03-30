import { User } from "../entity/User";
import { DojotSyncronizer } from "./dojot-syncronizer";
import axios from "axios";

export class UserSync extends DojotSyncronizer {
  async run() {
    const users = await this.oldDB.getRepository(User).find({});

    try {
      await this.newDB.save(users);
    } catch (error) {
      console.log(error);
    }

    for (const user of users) {
      try {
        await axios.post("http://localhost:8001/consumers", {
          username: user.username,
        });
      } catch (error) {
        console.log(`Fail to create consumer...${user.name}`);
      }

      const response = await axios.post(
        `http://localhost:8001/consumers/${user.username}/jwt`,
        "",
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      );

      await this.newDB
        .createQueryBuilder()
        .update(User)
        .where({
          id: user.id,
        })
        .set({
          key: response.data.key,
          secret: response.data.secret,
          kongId: response.data.id,
        })
        .execute();
    }
  }
}
