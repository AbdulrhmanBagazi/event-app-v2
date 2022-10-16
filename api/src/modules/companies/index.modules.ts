import { Events } from './modules/events/index.modules';
import { Location } from './modules/location/index.modules';
import { Dashboard } from './modules/dashboard/index.modules';
import { eventjobs } from './modules/eventjobs/index.modules';
import { eventshifts } from './modules/eventshifts/index.modules';
import { Applicants } from './modules/applicants/index.modules';

export const CompaniesResolvers = {
  Query: {
    ...Events.Query,
    ...Location.Query,
    ...Dashboard.Query,
    ...eventjobs.Query,
    ...eventshifts.Query,
    ...Applicants.Query,
  },
  Mutation: {
    ...Events.Mutation,
    ...eventjobs.Mutation,
    ...eventshifts.Mutation,
  },
  // ...Users.Resolver,
  ...Dashboard.Resolver,
  ...Applicants.Resolver,
};

export const CompaniesTypeDefs = [
  Events.typeDef,
  Location.typeDef,
  Dashboard.typeDef,
  eventjobs.typeDef,
  eventshifts.typeDef,
  Applicants.typeDef,
];
