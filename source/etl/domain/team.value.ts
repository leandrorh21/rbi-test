export class TeamValue {
  id: number;
  name: String;
  tla: String;
  shortName: String;
  areaName: String;
  address: String;

  constructor(
    id: number,
    name: String,
    tla: String,
    shortName: String,
    areaName: String,
    address: String
  ) {
    this.id = id;
    this.name = name;
    this.tla = tla;
    this.shortName = shortName;
    this.areaName = areaName;
    this.address = address;
  }
}
