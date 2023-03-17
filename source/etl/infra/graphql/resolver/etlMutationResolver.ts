import { ExternalEtlRepository } from "../../repository/futball.extapi";
import { EtlUseCase } from "../../../application/etl-usecase";
import { EtlController } from "../../controller/etl.ctrl";
import { PostgresEtlRepository } from "../../repository/futball.postgres";
import { EtlPostgresUseCase } from "../../../application/etl-postgres-usecase";

interface MutationMigrateLeagueArgs {
  leagueName: String;
}

const externalEtlRepository = new ExternalEtlRepository();
const etlUseCase = new EtlUseCase(externalEtlRepository);

const postgresEtlRepository = new PostgresEtlRepository();
const etlPostgresUseCase = new EtlPostgresUseCase(postgresEtlRepository);

const etlController = new EtlController(etlUseCase, etlPostgresUseCase);

export default {
  Mutation: {
    migrateLeague: async (_: any, args: MutationMigrateLeagueArgs) => {
      const { leagueName } = args;
      return await etlController.migrateLeague(leagueName);
    },
  },
};
