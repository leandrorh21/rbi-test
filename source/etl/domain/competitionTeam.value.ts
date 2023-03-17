export class CompetitionTeamValue {
  id: number;
  teamID: number;
  competitionID: number;

  constructor(teamID: number, competitionID: number) {
    this.teamID = teamID;
    this.competitionID = competitionID;
  }
}
