import { CompetitionValue } from "../../domain/competition.value";
import { CompetitionTeamValue } from "../../domain/competitionTeam.value";
import { EtlPostgresRepository } from "../../domain/etlRepositoryPostgres";
import { PlayerValue } from "../../domain/player.value";
import { TeamValue } from "../../domain/team.value";
import { Competition, Player, Team } from "../modelpostgres";
import CompetitionTeam from "../modelpostgres/competition-team.model";

export class PostgresEtlRepository implements EtlPostgresRepository {
  async saveCompetition(competition: CompetitionValue): Promise<void> {
    await Competition.upsert(competition);
  }

  async saveTeam(teams: TeamValue[]): Promise<void> {
    await Team.bulkCreate(teams, { updateOnDuplicate: ["name"] });
  }

  async savePlayer(players: PlayerValue[]): Promise<void> {
    await Player.bulkCreate(players, { updateOnDuplicate: ["name"] });
  }

  async saveCompetitionTeam(
    competitionTeams: CompetitionTeamValue[]
  ): Promise<void> {
    await CompetitionTeam.bulkCreate(competitionTeams, {
      updateOnDuplicate: ["teamID", "competitionID"],
    });
  }

  async getPlayers(
    leagueCode: String,
    teamName?: String
  ): Promise<PlayerValue[]> {
    const dataPlayers = (await Player.findAll({
      where: {
        "$Team.Competition.code$": leagueCode,
        ...(teamName && {
          "$Team.name$": teamName,
        }),
      },
      include: [
        {
          model: Team,
          as: "Team",
          include: [{ model: Competition, as: "Competition" }],
        },
      ],
    })) as PlayerValue[];

    return JSON.parse(JSON.stringify(dataPlayers));
  }
}
