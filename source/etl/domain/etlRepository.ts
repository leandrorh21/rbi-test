import { CompetitionValue } from "./competition.value";
import { TeamValue } from "./team.value";

export interface EtlRepository {
  getCompetitionInfoApi(leagueName: String): Promise<any>;
  getTeamPlayersInfoApi(leagueName: String): Promise<any>;
}
