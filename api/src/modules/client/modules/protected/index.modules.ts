import { Posts } from '../protected/posts/index.modules';

export const ClientResolvers = {
  // Query: {
  //   ...Posts.Query,
  // },
  Mutation: {
    ...Posts.Mutation,
  },
  // ...Posts.Resolver,
};
export const ClientTypeDefs = [Posts.typeDef];
