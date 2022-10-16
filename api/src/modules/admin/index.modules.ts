import { Users } from './modules/users/index.modules';
import { Companies } from './modules/companies/index.modules';
import { Events } from './modules/events/index.modules';
import { Location } from './modules/location/index.modules';
import { Dashboard } from './modules/dashboard/index.modules';
import { AppSection } from './modules/app_section/index.modules';
import { eventjobs } from './modules/eventjobs/index.modules';
import { eventshifts } from './modules/eventshifts/index.modules';
import { Applicants } from './modules/applicants/index.modules';

export const AdminResolvers = {
  Query: {
    ...Users.Query,
    ...Companies.Query,
    ...Events.Query,
    ...Location.Query,
    ...Dashboard.Query,
    ...AppSection.Query,
    ...eventjobs.Query,
    ...eventshifts.Query,
    ...Applicants.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Companies.Mutation,
    ...Events.Mutation,
    ...Location.Mutation,
    ...AppSection.Mutation,
    ...eventjobs.Mutation,
    ...eventshifts.Mutation,
  },
  // ...Users.Resolver,
  ...Dashboard.Resolver,
  ...Applicants.Resolver,
};

export const AdminTypeDefs = [
  Users.typeDef,
  Companies.typeDef,
  Events.typeDef,
  Location.typeDef,
  Dashboard.typeDef,
  AppSection.typeDef,
  eventjobs.typeDef,
  eventshifts.typeDef,
  Applicants.typeDef,
];
