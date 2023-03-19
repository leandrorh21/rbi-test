import { mergeResolvers } from "@graphql-tools/merge";

import etlResolver from "../etl/infra/graphql/resolver/etlResolver";

const arrayResolvers = [etlResolver];

const mergedResolvers = mergeResolvers(arrayResolvers);

export { mergedResolvers };
