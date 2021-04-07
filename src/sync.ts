import "reflect-metadata";
import { createConnections, getConnection } from "typeorm";
import { ClearDB } from "./services/clear-db";
import { GroupPermissionSync } from "./services/group-permission-sync";
import { UserPermissionSync } from "./services/user-permission-sync";
import { GroupSync } from "./services/group-sync";
import { PermissionSync } from "./services/permission-sync";
import { UserGroupSync } from "./services/user-group-sync";
import { UserSync } from "./services/user-sync";
import { DeprecatedPermissionsSync } from "./services/depracated-permissions-sync";
import { PasswordInactiveSync } from "./services/password-inactive-sync";

createConnections()
  .then(async () => {
    const fourThree = getConnection("0.4.3").manager;
    const fiveZero = getConnection("0.5.0").manager;

    try {
      await new ClearDB(fourThree, fiveZero).run();
      await new GroupSync(fourThree, fiveZero).run();
      await new UserSync(fourThree, fiveZero).run();
      await new UserGroupSync(fourThree, fiveZero).run();
      await new PermissionSync(fourThree, fiveZero).run();
      await new GroupPermissionSync(fourThree, fiveZero).run();
      await new UserPermissionSync(fourThree, fiveZero).run();
      await new DeprecatedPermissionsSync(fourThree, fiveZero).run();
      await new PasswordInactiveSync(fourThree, fiveZero).run();
    } catch (error) {
      console.log(error);
    }

  })
  .catch((error) => console.log(error));
