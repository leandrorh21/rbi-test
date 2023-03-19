import { TeamValue } from "./team.value";

export class PlayerValue {
  id: number;
  name: String;
  position?: String;
  dateOfBirth: String;
  nationality: String;
  teamID: number;
  Team?: TeamValue;

  constructor(
    name: String,
    dateOfBirth: String,
    nationality: String,
    teamID: number,
    Team?: TeamValue,
    position?: String
  ) {
    this.name = name;
    this.position = position;
    this.dateOfBirth = dateOfBirth;
    this.nationality = nationality;
    this.teamID = teamID;
    this.Team = Team;
  }
}
