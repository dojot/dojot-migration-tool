import { EntityManager } from "typeorm";

export abstract class DojotSyncronizer {
  oldDB: EntityManager;
  newDB: EntityManager;

  constructor(oldDB: EntityManager, newDB: EntityManager) {
    this.oldDB = oldDB;
    this.newDB = newDB;
  }

  abstract run(): void;
}
