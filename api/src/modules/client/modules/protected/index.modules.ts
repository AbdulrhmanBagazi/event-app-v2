import { Profile } from '../protected/profile/index.modules';

export const ClientResolvers = {
  // Query: {
  //   ...Posts.Query,
  // },
  Mutation: {
    ...Profile.Mutation,
  },
  // ...Posts.Resolver,
};
export const ClientTypeDefs = [Profile.typeDef];
