export class PlayerValue {
  id: number;
  name: String;
  position: String;
  dateOfBirth: String;
  nationality: String;
  teamID: number;

  constructor(
    id: number,
    name: String,
    position: String,
    dateOfBirth: String,
    nationality: String,
    teamID: number
  ) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
    this.teamID = teamID;
  }
}
