import { mergeResolvers } from "@graphql-tools/merge";

import etlResolverMutation from "../etl/infra/graphql/resolver/etlMutationResolver";

const arrayResolvers = [etlResolverMutation];

const mergedResolvers = mergeResolvers(arrayResolvers);

export { mergedResolvers };
