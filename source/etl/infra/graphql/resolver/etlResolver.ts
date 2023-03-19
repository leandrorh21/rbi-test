import { ExternalEtlRepository } from "../../repository/futball.extapi";
import { EtlUseCase } from "../../../application/etl-usecase";
import { EtlController } from "../../controller/etl.ctrl";
import { PostgresEtlRepository } from "../../repository/futball.postgres";
import { EtlPostgresUseCase } from "../../../application/etl-postgres-usecase";

interface MigrateLeagueArgs {
  leagueCode: String;
}

interface QueryLeagueArgs {
  leagueCode: String;
  teamName?: String;
}

const externalEtlRepository = new ExternalEtlRepository();
const etlUseCase = new EtlUseCase(externalEtlRepository);

const postgresEtlRepository = new PostgresEtlRepository();
const etlPostgresUseCase = new EtlPostgresUseCase(postgresEtlRepository);

const etlController = new EtlController(etlUseCase, etlPostgresUseCase);

export default {
  Query: {
    getPlayers: async (_: any, args: QueryLeagueArgs) => {
      const { leagueCode, teamName } = args;
      return await etlController.getPlayers(leagueCode, teamName);
    },
  },
  Mutation: {
    migrateLeague: async (_: any, args: MigrateLeagueArgs) => {
      const { leagueCode } = args;
      return await etlController.migrateLeague(leagueCode);
    },
  },
};
