import { CompetitionValue } from "./competition.value";
import { TeamValue } from "./team.value";

export interface EtlRepository {
  getCompetitionInfoApi(leagueCode: String): Promise<any>;
  getTeamPlayersInfoApi(leagueCode: String): Promise<any>;
}
