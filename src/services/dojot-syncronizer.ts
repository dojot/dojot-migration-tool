import { EntityManager } from "typeorm";

export class DojotSyncronizer {
  oldDB: EntityManager;
  newDB: EntityManager;

  constructor(oldDB: EntityManager, newDB: EntityManager) {
    this.oldDB = oldDB;
    this.newDB = newDB;
  }
}
