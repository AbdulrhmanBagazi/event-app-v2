import { getMany_Location_Query, getMany_Location_TypeDefs } from './getMany/getMany.location';
import { list_Location_Query, list_Location_TypeDefs } from './list/list.location';

const Query = { ...list_Location_Query, ...getMany_Location_Query };

// const Mutation = {};

// const Resolver = {};

const typeDef = [list_Location_TypeDefs, getMany_Location_TypeDefs];

export const Location = {
  Query,
  // Mutation,
  // Resolver,
  typeDef,
};
