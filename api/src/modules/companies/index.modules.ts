import { Users } from './modules/users/index.modules';

export const CompaniesResolvers = {
  Query: {
    ...Users.Query,
  },
  Mutation: {
    ...Users.Mutation,
  },
  ...Users.Resolver,
};
export const CompaniesTypeDefs = [Users.typeDef];
