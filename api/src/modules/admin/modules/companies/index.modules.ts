import { Create_Companies_Mutation, Create_Companies_TypeDefs } from './create/create.companies';
import { list_Companies_Query, list_Companies_TypeDefs } from './list/list.companies';

const Query = { ...list_Companies_Query };

const Mutation = { ...Create_Companies_Mutation };

const typeDef = [list_Companies_TypeDefs, Create_Companies_TypeDefs];

export const Companies = {
  Query,
  Mutation,
  typeDef,
};
