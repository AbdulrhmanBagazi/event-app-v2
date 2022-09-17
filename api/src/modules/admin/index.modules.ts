import { Users } from './modules/users/index.modules';
import { Companies } from './modules/companies/index.modules';
import { Events } from './modules/events/index.modules';
import { Section } from './modules/section/index.modules';

export const AdminResolvers = {
  Query: {
    ...Users.Query,
    ...Companies.Query,
    ...Events.Query,
    ...Section.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Companies.Mutation,
    ...Events.Mutation,
    ...Section.Mutation,
  },
  ...Users.Resolver,
};

export const AdminTypeDefs = [Users.typeDef, Companies.typeDef, Events.typeDef, Section.typeDef];
