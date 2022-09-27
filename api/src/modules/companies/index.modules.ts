import { Events } from './modules/events/index.modules';
import { Location } from './modules/location/index.modules';
import { Dashboard } from './modules/dashboard/index.modules';
export const CompaniesResolvers = {
  Query: {
    ...Events.Query,
    ...Location.Query,
    ...Dashboard.Query,
  },
  Mutation: {
    ...Events.Mutation,
  },
  // ...Users.Resolver,
  ...Dashboard.Resolver,
};

export const CompaniesTypeDefs = [Events.typeDef, Location.typeDef, Dashboard.typeDef];
