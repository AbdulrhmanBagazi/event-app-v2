import { Events } from './modules/events/index.modules';
import { Section } from './modules/section/index.modules';

export const CompaniesResolvers = {
  Query: {
    ...Events.Query,
    ...Section.Query,
  },
  Mutation: {
    ...Events.Mutation,
  },
  // ...Users.Resolver,
};

export const CompaniesTypeDefs = [Events.typeDef, Section.typeDef];
