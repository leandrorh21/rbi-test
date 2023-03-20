import { startStandaloneServer } from "@apollo/server/standalone";

import { server } from "./createApolloServer";

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT as number | undefined },
  });

  return url;
};

startServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
