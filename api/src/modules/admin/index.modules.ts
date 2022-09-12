import { Users } from './modules/users/index.modules';
import { Companies } from './modules/companies/index.modules';

export const AdminResolvers = {
  Query: {
    ...Users.Query,
    ...Companies.Query,
  },
  Mutation: {
    ...Users.Mutation,
    ...Companies.Mutation,
  },
  ...Users.Resolver,
};
export const AdminTypeDefs = [Users.typeDef, Companies.typeDef];
