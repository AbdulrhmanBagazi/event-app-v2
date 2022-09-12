import { Posts } from './posts/index.modules';

export const PublicClientResolvers = {
  Query: {
    ...Posts.Query,
  },
  // Mutation: {
  //   ...Posts.Mutation,
  // },
  // ...Posts.Resolver,
};
export const PublicClientTypeDefs = [Posts.typeDef];
