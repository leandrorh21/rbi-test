export class CompetitionValue {
  id: number;
  name: String;
  code: String;
  areaName: String;

  constructor(name: String, code: String, areaName: String) {
    this.name = name;
    this.code = code;
    this.areaName = areaName;
  }
}
