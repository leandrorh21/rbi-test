import { CompetitionValue } from "./competition.value";
import { PlayerValue } from "./player.value";
import { TeamValue } from "./team.value";

export interface EtlPostgresRepository {
  saveCompetition(competition: CompetitionValue): Promise<void>;
  saveTeam(teams: TeamValue[]): Promise<void>;
  savePlayer(players: PlayerValue[]): Promise<void>;
}
