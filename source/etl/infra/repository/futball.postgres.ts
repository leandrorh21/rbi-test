import { CompetitionValue } from "../../domain/competition.value";
import { EtlPostgresRepository } from "../../domain/etlRepositoryPostgres";
import { PlayerValue } from "../../domain/player.value";
import { TeamValue } from "../../domain/team.value";
import { Competition, Player, Team } from "../modelpostgres";

export class PostgresEtlRepository implements EtlPostgresRepository {
  async saveCompetition(competition: CompetitionValue): Promise<void> {
    await Competition.upsert(competition);
  }

  async saveTeam(teams: TeamValue[]): Promise<void> {
    await Team.bulkCreate(teams, { updateOnDuplicate: ["name"] });
  }

  async savePlayer(players: PlayerValue[]): Promise<void> {
    await Player.bulkCreate(players, { updateOnDuplicate: ["name"] });
  }

  //   async createMeal(meal: MealEntity): Promise<void> {
  //     await Meal.create(meal);
  //   }
  //   async getMeals(chefID: string): Promise<MealEntity[]> {
  //     const meals = await Meal.findAll({
  //       where: {
  //         ...(chefID && { chefID }),
  //       },
  //       attributes: ["name", "rate"],
  //       include: [{ model: User, as: "Chef", attributes: ["name"] }],
  //     });
  //     return meals;
  //   }
  //   async rateMeal(id: string, rate: number): Promise<void> {
  //     await Meal.update(
  //       { rate },
  //       {
  //         where: {
  //           id,
  //         },
  //       }
  //     );
  //   }
}
