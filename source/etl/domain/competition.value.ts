export class CompetitionValue {
  id: number;
  name: String;
  code: String;
  areaName: String;

  constructor(id: number, name: String, code: String, areaName: String) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.areaName = areaName;
  }
}
