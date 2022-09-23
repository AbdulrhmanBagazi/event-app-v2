import { getMany_Section_Query, getMany_Section_TypeDefs } from './getMany/getMany.section';
import { list_Section_Query, list_Section_TypeDefs } from './list/list.section';

const Query = { ...list_Section_Query, ...getMany_Section_Query };

// const Mutation = {};

// const Resolver = {};

const typeDef = [list_Section_TypeDefs, getMany_Section_TypeDefs];

export const Section = {
  Query,
  // Mutation,
  // Resolver,
  typeDef,
};
