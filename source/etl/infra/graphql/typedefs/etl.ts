export default `#graphql
  type ETLResponse {
    message: String
  }

  type Query{
    testQuery: ETLResponse
  }

  type Mutation {
    migrateLeague(leagueName: String!): ETLResponse
  }
`;
