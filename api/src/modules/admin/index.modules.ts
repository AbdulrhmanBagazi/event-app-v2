import { Users } from './modules/users/index.modules';
import { Companies } from './modules/companies/index.modules';
import { Events } from './modules/events/index.modules';
import { Location } from './modules/location/index.modules';
import { Dashboard } from './modules/dashboard/index.modules';
import { AppSection } from './modules/app_section/index.modules';
import { eventjobs } from './modules/eventjobs/index.modules';

export const AdminResolvers = {
  Query: {
    ...Users.Query,
    ...Companies.Query,
    ...Events.Query,
    ...Location.Query,
    ...Dashboard.Query,
    ...AppSection.Query,
    ...eventjobs.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Companies.Mutation,
    ...Events.Mutation,
    ...Location.Mutation,
    ...AppSection.Mutation,
    ...eventjobs.Mutation,
  },
  // ...Users.Resolver,
  ...Dashboard.Resolver,
};

export const AdminTypeDefs = [
  Users.typeDef,
  Companies.typeDef,
  Events.typeDef,
  Location.typeDef,
  Dashboard.typeDef,
  AppSection.typeDef,
  eventjobs.typeDef,
];
