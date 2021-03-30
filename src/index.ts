import "reflect-metadata";
import { createConnections, Equal, getConnection, Not } from "typeorm";
import { ClearDB } from "./services/clear-db";
import { GroupPermissionSync } from "./services/group-permission-sync";
import { GroupSync } from "./services/group-sync";
import { PermissionSync } from "./services/permission-sync";
import { UserGroupSync } from "./services/user-group-sync";
import { UserSync } from "./services/user-sync";

createConnections()
  .then(async (connections) => {
    const fourThree = getConnection("0.4.3").manager;
    const fiveZero = getConnection("0.5.0").manager;

    try {
      await new ClearDB(fourThree, fiveZero).run();
      await new GroupSync(fourThree, fiveZero).run();
      await new UserSync(fourThree, fiveZero).run();
      await new UserGroupSync(fourThree, fiveZero).run();
      await new PermissionSync(fourThree, fiveZero).run();
      await new GroupPermissionSync(fourThree, fiveZero).run();

    } catch (error) {
      console.log(error);
    }

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // const users = await fourThree.getRepository(User).find({
    //     username: Not(Equal("admin"))
    // });

    // fiveZero.save(users);

    // console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
