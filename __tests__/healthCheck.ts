import { server } from "../source/main";

it("runs a health check agains graphql schema", async () => {
  const response = await server.executeOperation({
    query: `#graphql
      query {health}
    `,
  });

  const fResponse = JSON.parse(JSON.stringify(response));

  expect(fResponse.body.singleResult.data.health).toEqual(true);

  // const result = await server.executeOperation({
  //   query: `#graphql
  //       query getTeams($teamName: String!){
  //         getTeams(teamName : $teamName){
  //           id
  //           name
  //         }
  //       }
  //    `,
  //   variables: {
  //     teamName: "Arsenal FC",
  //   },
  // });

  // expect(
  //   JSON.parse(JSON.stringify(result)).body.singleResult.errors
  // ).toBeUndefined();
});
