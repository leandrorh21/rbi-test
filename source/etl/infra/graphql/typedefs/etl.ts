export default `#graphql

  type Query{
    getPlayers(leagueCode: String!, teamName: String): [Player!]
  }

  type Mutation {
    migrateLeague(leagueCode: String!): ETLResponse
  }

  type ETLResponse {
    message: String
  }

  type Team{
    id: ID
    name: String
    tla: String
    shortName: String
    areaName: String
    address: String
  }

  type Player {
    id: ID
    name: String
    position:String
    dateOfBirth: String
    nationality: String
    Team: Team
  }
`;
