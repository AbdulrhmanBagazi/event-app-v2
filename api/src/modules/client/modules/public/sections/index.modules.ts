import { list_Sections_Query, list_Sections_Resolver, list_Sections_TypeDefs } from './list/sections.list';

const Query = { ...list_Sections_Query };

// const Mutation = { ...Create_Posts_Mutation };

const Resolver = { ...list_Sections_Resolver };

const typeDef = [list_Sections_TypeDefs];

export const Sections = {
  Query,
  // Mutation,
  Resolver,
  typeDef,
};
