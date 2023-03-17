import { mergeTypeDefs } from "@graphql-tools/merge";

import etl from "../etl/infra/graphql/typedefs/etl";

const arrayTypeDefs = [etl];

const mergedTypeDefs = mergeTypeDefs(arrayTypeDefs);

export { mergedTypeDefs };
