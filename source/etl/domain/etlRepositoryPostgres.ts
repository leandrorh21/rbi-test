import { CompetitionValue } from "./competition.value";
import { CompetitionTeamValue } from "./competitionTeam.value";
import { PlayerValue } from "./player.value";
import { TeamValue } from "./team.value";

export interface EtlPostgresRepository {
  saveCompetition(competition: CompetitionValue): Promise<void>;
  saveTeam(teams: TeamValue[]): Promise<void>;
  savePlayer(players: PlayerValue[]): Promise<void>;
  saveCompetitionTeam(competitionTeams: CompetitionTeamValue[]): Promise<void>;
  getPlayers(leagueCode: String, teamName?: String): Promise<PlayerValue[]>;
}
