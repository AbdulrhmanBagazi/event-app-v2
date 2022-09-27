import { Users } from './modules/users/index.modules';
import { Companies } from './modules/companies/index.modules';
import { Events } from './modules/events/index.modules';
import { Location } from './modules/location/index.modules';
import { Dashboard } from './modules/dashboard/index.modules';

export const AdminResolvers = {
  Query: {
    ...Users.Query,
    ...Companies.Query,
    ...Events.Query,
    ...Location.Query,
    ...Dashboard.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Companies.Mutation,
    ...Events.Mutation,
    ...Location.Mutation,
  },
  // ...Users.Resolver,
  ...Dashboard.Resolver,
};

export const AdminTypeDefs = [Users.typeDef, Companies.typeDef, Events.typeDef, Location.typeDef, Dashboard.typeDef];
