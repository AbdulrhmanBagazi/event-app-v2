import { Profile } from '../protected/profile/index.modules';
import { Apply } from './apply/index.modules';

export const ClientResolvers = {
  // Query: {
  //   ...Posts.Query,
  // },
  Mutation: {
    ...Profile.Mutation,
    ...Apply.Mutation,
  },
  // ...Posts.Resolver,
};
export const ClientTypeDefs = [Profile.typeDef, Apply.typeDef];
