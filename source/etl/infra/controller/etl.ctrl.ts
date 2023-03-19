import { randomInt } from "crypto";
import { GraphQLError } from "graphql";
import { EtlPostgresUseCase } from "../../application/etl-postgres-usecase";
import { EtlUseCase } from "../../application/etl-usecase";
import { CompetitionValue } from "../../domain/competition.value";
import { CompetitionTeamValue } from "../../domain/competitionTeam.value";
import { PlayerValue } from "../../domain/player.value";
import { TeamValue } from "../../domain/team.value";

export class EtlController {
  private readonly etlUseCase: EtlUseCase;
  private readonly etlPostgresUseCase: EtlPostgresUseCase;
  constructor(etlUseCase: EtlUseCase, etlPostgresUseCase: EtlPostgresUseCase) {
    this.etlUseCase = etlUseCase;
    this.etlPostgresUseCase = etlPostgresUseCase;
  }

  migrateLeague = async (leagueCode: String) => {
    try {
      const competitionInfo = await this.etlUseCase.getCompetitionInfoApi(
        leagueCode
      );

      // SI NO EXISTE RETORNAR UN ERROR!

      const teamPlayersInfo = await this.etlUseCase.getTeamPlayersInfoApi(
        leagueCode
      );

      const oCompetition = new CompetitionValue(
        competitionInfo.id,
        competitionInfo.name,
        competitionInfo.code,
        competitionInfo.area.name
      );

      const oListTeams = teamPlayersInfo.teams.map((team: any) => {
        const oTeam = new TeamValue(
          team.id,
          team.name,
          team.tla,
          team.shortName,
          team.area.name,
          team.address
        );

        return oTeam;
      }) as TeamValue[];

      const oListTeamCompetition = teamPlayersInfo.teams.map((team: any) => {
        const oTeamCompetition = new CompetitionTeamValue(
          team.id,
          competitionInfo.id
        );
        return oTeamCompetition;
      });

      const oListPlayersByTeam = teamPlayersInfo.teams.map((team: any) => {
        if (team.squad.length === 0 || !team.squad) {
          const oPlayer = new PlayerValue(
            team.coach.name,
            team.coach.dateOfBirth,
            team.coach.nationality,
            team.id
          );

          return oPlayer;
        } else {
          const squad = team.squad.map((squad: any) => {
            const oPlayer = new PlayerValue(
              squad.name,
              squad.dateOfBirth,
              squad.nationality,
              team.id,
              squad.position
            );
            return oPlayer;
          }) as PlayerValue[];
          return squad.flat();
        }
      }) as PlayerValue[];

      try {
        await this.etlPostgresUseCase.saveCompetitionInfo(oCompetition);
        await this.etlPostgresUseCase.saveTeamInfo(oListTeams);
        await this.etlPostgresUseCase.savePlayerInfo(oListPlayersByTeam.flat());
        await this.etlPostgresUseCase.saveCompetitionTeamInfo(
          oListTeamCompetition
        );
      } catch (error) {
        throw new GraphQLError(error);
      }

      return {
        message: "OK",
      };
    } catch (error) {
      throw new GraphQLError(error);
    }
  };

  getPlayers = async (leagueCode: String, teamName?: String) => {
    try {
      const players = await this.etlPostgresUseCase.getPlayers(
        leagueCode,
        teamName
      );
      if (players.length === 0) {
        throw new GraphQLError("The given league doesn't exist.");
      } else {
        return players;
      }
    } catch (error) {
      throw new GraphQLError(error);
    }
  };
}
