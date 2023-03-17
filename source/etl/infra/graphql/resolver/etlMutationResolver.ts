import { ExternalCompetitionRepository } from "../../repository/competition.extapi";
import { EtlUseCase } from "../../../application/etl-usecase";
import { EtlController } from "../../controller/etl.ctrl";

interface MutationMigrateLeagueArgs {
  leagueName: String;
}

const externalCompetitionRepository = new ExternalCompetitionRepository();
const etlUseCase = new EtlUseCase(externalCompetitionRepository);
const etlController = new EtlController(etlUseCase);

export default {
  Mutation: {
    migrateLeague: async (_: any, args: MutationMigrateLeagueArgs) => {
      const { leagueName } = args;
      return await etlController.migrateLeague(leagueName);
    },
  },
};
