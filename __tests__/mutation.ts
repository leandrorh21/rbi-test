import { server } from "../source/createApolloServer";

describe("suit for test ETL mutation", () => {
  it("runs a mutation to import a league", async () => {
    const response = await server.executeOperation({
      query: `#graphql
            mutation migrateLeague($leagueCode: String!){
                migrateLeague(leagueCode : $leagueCode){
                   message
                }
            }
            `,
      variables: {
        leagueCode: "PL",
      },
    });

    const fResponse = JSON.parse(JSON.stringify(response));

    expect(fResponse.body.singleResult.data.migrateLeague).toBeDefined();
    expect(fResponse.body.singleResult.data.migrateLeague.message).toEqual(
      "OK"
    );
    expect(fResponse.body.singleResult.errors).toBeUndefined();
  }, 15000);

  it("runs a mutation to import a league failed non exist resource", async () => {
    const response = await server.executeOperation({
      query: `#graphql
            mutation migrateLeague($leagueCode: String!){
                migrateLeague(leagueCode : $leagueCode){
                   message
                }
            }
            `,
      variables: {
        leagueCode: "PLL",
      },
    });

    const fResponse = JSON.parse(JSON.stringify(response));

    expect(fResponse.body.singleResult.data.migrateLeague).toBeNull();
    expect(fResponse.body.singleResult.errors).toBeDefined();
    expect(fResponse.body.singleResult.errors[0].message).toEqual(
      "The resource you are looking for does not exist."
    );
  }, 15000);
});
