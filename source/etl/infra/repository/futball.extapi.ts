import axios from "axios";
import { GraphQLError } from "graphql";
import { EtlRepository } from "../../domain/etlRepository";

export class ExternalEtlRepository implements EtlRepository {
  async getCompetitionInfoApi(leagueCode: String): Promise<any> {
    try {
      const competitionFullData = await axios.get(
        `${process.env.EXT_API_URL}${leagueCode}`,
        {
          headers: {
            "X-Auth-Token": process.env.AUTH_EXT_API_TOKEN,
          },
        }
      );

      return competitionFullData.data;
    } catch (error) {
      throw new GraphQLError(error.response.data.message);
    }
  }

  async getTeamPlayersInfoApi(leagueCode: String): Promise<any> {
    try {
      const teamPlayersInfoData = await axios.get(
        `${process.env.EXT_API_URL}${leagueCode}/teams`,
        {
          headers: {
            "X-Auth-Token": process.env.AUTH_EXT_API_TOKEN,
          },
        }
      );

      return teamPlayersInfoData.data;
    } catch (error) {
      throw new GraphQLError(error.response.data.message);
    }
  }
}
