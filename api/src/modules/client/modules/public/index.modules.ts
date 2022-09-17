import { Events } from './events/index.modules';

export const PublicClientResolvers = {
  Query: {
    ...Events.Query,
  },
  // Mutation: {
  //   ...Posts.Mutation,
  // },
  ...Events.Resolver,
};
export const PublicClientTypeDefs = [Events.typeDef];
