export class TeamValue {
  id: number;
  name: String;
  tla: String;
  shortName: String;
  areaName: String;
  address: String;

  constructor(
    name: String,
    tla: String,
    shortName: String,
    areaName: String,
    address: String
  ) {
    this.name = name;
    this.tla = tla;
    this.shortName = shortName;
    this.areaName = areaName;
    this.address = address;
  }
}
