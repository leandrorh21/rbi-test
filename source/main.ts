import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { mergedTypeDefs } from "./common/graphqlSchema";
import { mergedResolvers } from "./common/graphqlResolvers";

import dotenv from "dotenv";

dotenv.config();

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });

  return url;
};

startServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
