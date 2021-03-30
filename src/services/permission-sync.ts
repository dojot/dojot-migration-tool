import { DojotSyncronizer } from "./dojot-syncronizer";
import { Permission } from "../entity/Permission";

export class PermissionSync extends DojotSyncronizer {
  async run() {
    const permissions = await this.oldDB.getRepository(Permission).find();
    await this.newDB.save(permissions);

    await this.newDB
      .createQueryBuilder()
      .update(Permission)
      .where({
        path: "/import/(.*)",
        name: "all_import",
      })
      .set({
        method: "POST",
        name: "wo_import",
      })
      .execute();

    await this.newDB
      .createQueryBuilder()
      .update(Permission)
      .where({
        path: "/ca/(.*)",
        name: "ro_ca",
        method: "GET",
      })
      .set({
        path: "/x509/v1/ca/(.*)",
        name: "ro_x509_ca",
      })
      .execute();

    await this.newDB
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values({
        path: "/x509/v1/ca/(.*)",
        name: "all_x509_ca",
        method: "(.*)",
        permission: "permit",
        type: "system",
        createdDate: new Date(),
        createdBy: 0,
      })
      .execute();

    await this.newDB
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values({
        path: "/x509/v1/certificates/(.*)",
        name: "all_x509_certificates",
        method: "(.*)",
        permission: "permit",
        type: "system",
        createdDate: new Date(),
        createdBy: 0,
      })
      .execute();

    await this.newDB
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values({
        path: "/x509/v1/certificates/(.*)",
        name: "ro_x509_certificates",
        method: "GET",
        permission: "permit",
        type: "system",
        createdDate: new Date(),
        createdBy: 0,
      })
      .execute();

    await this.newDB
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values({
        path: "/graphql/(.*)",
        name: "all_backstage",
        method: "(.*)",
        permission: "permit",
        type: "system",
        createdDate: new Date(),
        createdBy: 0,
      })
      .execute();
  }
}
