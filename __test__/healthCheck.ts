import { server } from "../source/createApolloServer";

it("runs a health check agains graphql schema", async () => {
  const result = await server.executeOperation({
    query: `#graphql
        query{
            health
        }
     `,
  });

  expect(result).toBeTruthy();
  expect(result).toEqual(true);
});
