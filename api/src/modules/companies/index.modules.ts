import { Events } from './modules/events/index.modules';
import { Location } from './modules/location/index.modules';
import { Dashboard } from './modules/dashboard/index.modules';
import { eventjobs } from './modules/eventjobs/index.modules';

export const CompaniesResolvers = {
  Query: {
    ...Events.Query,
    ...Location.Query,
    ...Dashboard.Query,
    ...eventjobs.Query,
  },
  Mutation: {
    ...Events.Mutation,
    ...eventjobs.Mutation,
  },
  // ...Users.Resolver,
  ...Dashboard.Resolver,
};

export const CompaniesTypeDefs = [Events.typeDef, Location.typeDef, Dashboard.typeDef, eventjobs.typeDef];
