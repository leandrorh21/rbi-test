import axios from "axios";
import { CompetitionValue } from "../../domain/competition.value";
import { EtlRepository } from "../../domain/etlRepository";
import { TeamValue } from "../../domain/team.value";

export class ExternalEtlRepository implements EtlRepository {
  async getCompetitionInfoApi(leagueCode: String): Promise<any> {
    const competitionFullData = await axios.get(
      `https://api.football-data.org/v4/competitions/${leagueCode}`,
      {
        headers: {
          "X-Auth-Token": "632dcd4c074a4389bb5b19284dc324fe",
        },
      }
    );

    return competitionFullData.data;
  }

  async getTeamPlayersInfoApi(leagueCode: String): Promise<any> {
    const teamPlayersInfoData = await axios.get(
      `https://api.football-data.org/v4/competitions/${leagueCode}/teams`,
      {
        headers: {
          "X-Auth-Token": "632dcd4c074a4389bb5b19284dc324fe",
        },
      }
    );

    return teamPlayersInfoData.data;
  }
}
