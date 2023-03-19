import { PlayerValue } from "./player.value";

export class TeamValue {
  id: number;
  name: String;
  tla: String;
  shortName: String;
  areaName: String;
  address: String;
  Players?: PlayerValue[];

  constructor(
    id: number,
    name: String,
    tla: String,
    shortName: String,
    areaName: String,
    address: String,
    Players?: PlayerValue[]
  ) {
    this.id = id;
    this.name = name;
    this.tla = tla;
    this.shortName = shortName;
    this.areaName = areaName;
    this.address = address;
    this.Players = Players;
  }
}
