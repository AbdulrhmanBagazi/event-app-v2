import { Events } from './events/index.modules';
import { Sections } from './sections/index.modules';

export const PublicClientResolvers = {
  Query: {
    ...Events.Query,
    ...Sections.Query,
  },
  // Mutation: {
  //   ...Posts.Mutation,
  // },
  ...Events.Resolver,
  ...Sections.Resolver,
};
export const PublicClientTypeDefs = [Events.typeDef, Sections.typeDef];
