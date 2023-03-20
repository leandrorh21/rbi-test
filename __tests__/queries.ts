import { server } from "../source/createApolloServer";

describe("suit for test ETL queries", () => {
  it("runs a query to get players of leage", async () => {
    const response = await server.executeOperation({
      query: `#graphql
            query getPlayers($leagueCode: String!){
            getPlayers(leagueCode : $leagueCode){
                id
                name
            }
        }
        `,
      variables: {
        leagueCode: "PL",
      },
    });

    const fResponse = JSON.parse(JSON.stringify(response));

    expect(fResponse.body.singleResult.data.getPlayers).toBeDefined();
    expect(fResponse.body.singleResult.errors).toBeUndefined();
  });

  it("runs a query to get players of leage failed", async () => {
    const response = await server.executeOperation({
      query: `#graphql
        query getPlayers($leagueCode: String!){
            getPlayers(leagueCode : $leagueCode){
                id
                name
        }
      }
   `,
      variables: {
        leagueCode: "AL",
      },
    });

    const fResponse = JSON.parse(JSON.stringify(response));

    expect(fResponse.body.singleResult.errors).toBeDefined();
    expect(fResponse.body.singleResult.errors[0].message).toEqual(
      "The given league doesn't exist."
    );
  });

  it("runs a query to get a team", async () => {
    const response = await server.executeOperation({
      query: `#graphql
              query getTeams($teamName: String!){
                getTeams(teamName : $teamName){
                  id
                  name
                }
              }
           `,
      variables: {
        teamName: "Arsenal FC",
      },
    });

    const fResponse = JSON.parse(JSON.stringify(response));

    expect(fResponse.body.singleResult.data.getTeams).toBeDefined();
    expect(fResponse.body.singleResult.errors).toBeUndefined();
  });

  it("runs a query to get a team failed", async () => {
    const response = await server.executeOperation({
      query: `#graphql
              query getTeams($teamName: String!){
                getTeams(teamName : $teamName){
                  id
                  name
                }
              }
           `,
      variables: {
        teamName: "Arsenal",
      },
    });

    const fResponse = JSON.parse(JSON.stringify(response));

    expect(fResponse.body.singleResult.errors).toBeDefined();
    expect(fResponse.body.singleResult.errors[0].message).toEqual(
      "The given team doesn't exist."
    );
  });
});
