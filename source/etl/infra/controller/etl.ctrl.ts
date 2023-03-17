import { GraphQLError } from "graphql";
import { EtlUseCase } from "../../application/etl-usecase";
import { CompetitionValue } from "../../domain/competition.value";
import { PlayerValue } from "../../domain/player.value";
import { TeamValue } from "../../domain/team.value";

export class EtlController {
  private readonly etlUseCase: EtlUseCase;
  constructor(etlUseCase: EtlUseCase) {
    this.etlUseCase = etlUseCase;
  }

  migrateLeague = async (leagueName: String) => {
    try {
      const competitionInfo = await this.etlUseCase.getCompetitionInfoApi(
        leagueName
      );

      const teamPlayersInfo = await this.etlUseCase.getTeamPlayersInfoApi(
        leagueName
      );

      const oCompetition = new CompetitionValue(
        competitionInfo.name,
        competitionInfo.code,
        competitionInfo.area.name
      );

      const oListTeamsByCompetition = teamPlayersInfo.teams.map((team: any) => {
        const oTeam = new TeamValue(
          team.name,
          team.tla,
          team.shortName,
          team.area.name,
          team.address
        );

        return oTeam;
      }) as TeamValue[];

      const oListPlayersByTeam = teamPlayersInfo.teams.map((team: any) => {
        const squad = team.squad.map((squad: any) => {
          const oPlayer = new PlayerValue(
            squad.name,
            squad.position,
            squad.dateOfBirth,
            squad.nationality,
            team.id
          );

          return oPlayer;
        }) as [];
        return squad.flat();
      }) as PlayerValue[];

      return {
        message: "OK",
      };
    } catch (error) {
      throw new GraphQLError(error);
    }
  };
}
