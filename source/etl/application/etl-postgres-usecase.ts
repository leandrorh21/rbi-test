import { CompetitionValue } from "../domain/competition.value";
import { CompetitionTeamValue } from "../domain/competitionTeam.value";
import { EtlPostgresRepository } from "../domain/etlRepositoryPostgres";
import { PlayerValue } from "../domain/player.value";
import { TeamValue } from "../domain/team.value";

export class EtlPostgresUseCase {
  private readonly etlPostgresRepository: EtlPostgresRepository;
  constructor(etlPostgresRepository: EtlPostgresRepository) {
    this.etlPostgresRepository = etlPostgresRepository;
  }

  public saveCompetitionInfo = async (
    competition: CompetitionValue
  ): Promise<void> => {
    await this.etlPostgresRepository.saveCompetition(competition);
  };

  public saveTeamInfo = async (teams: TeamValue[]): Promise<void> => {
    await this.etlPostgresRepository.saveTeam(teams);
  };

  public savePlayerInfo = async (players: PlayerValue[]): Promise<void> => {
    await this.etlPostgresRepository.savePlayer(players);
  };

  public saveCompetitionTeamInfo = async (
    competitionTeams: CompetitionTeamValue[]
  ): Promise<void> => {
    await this.etlPostgresRepository.saveCompetitionTeam(competitionTeams);
  };
}
