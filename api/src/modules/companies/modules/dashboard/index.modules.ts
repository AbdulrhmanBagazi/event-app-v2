import { data_Dashboard_Query, data_Dashboard_Resolver, data_Dashboard_TypeDefs } from './data/data.dashboard';

const Query = { ...data_Dashboard_Query };

// const Mutation = {  };

const Resolver = { ...data_Dashboard_Resolver };

const typeDef = [data_Dashboard_TypeDefs];

export const Dashboard = {
  Query,
  // Mutation,
  Resolver,
  typeDef,
};
