import { CompetitionValue } from "../domain/competition.value";
import { EtlRepository } from "../domain/etlRepository";
import { TeamValue } from "../domain/team.value";

export class EtlUseCase {
  private readonly etlRepository: EtlRepository;
  constructor(etlRepository: EtlRepository) {
    this.etlRepository = etlRepository;
  }

  public getCompetitionInfoApi = async (leagueCode: String): Promise<any> => {
    const futballInfoApi = await this.etlRepository.getCompetitionInfoApi(
      leagueCode
    );
    return futballInfoApi;
  };

  public getTeamPlayersInfoApi = async (leagueCode: String): Promise<any> => {
    const teamPlayersInfoApi = await this.etlRepository.getTeamPlayersInfoApi(
      leagueCode
    );
    return teamPlayersInfoApi;
  };
}
