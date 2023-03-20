import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

import { mergedTypeDefs } from "./common/graphqlSchema";
import { mergedResolvers } from "./common/graphqlResolvers";

import dotenv from "dotenv";

dotenv.config();

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

export { server };
