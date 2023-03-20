import { server } from "../source/main";

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
  });
});
