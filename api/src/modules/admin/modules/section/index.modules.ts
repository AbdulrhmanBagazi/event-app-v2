import { Create_Section_Mutation, Create_Section_TypeDefs } from './create/create.section';
import { getMany_Section_Query, getMany_Section_TypeDefs } from './getMany/getMany.section';
import { Section_Events_Query, Section_Events_TypeDefs } from './getManyReference/event.section';
import { getOne_Section_Query, getOne_Section_TypeDefs } from './getOne/getOne.section';
import { list_Section_Query, list_Section_TypeDefs } from './list/list.section';
import { Update_Section_Mutation, Update_Section_TypeDefs } from './update/update.section';

const Query = { ...list_Section_Query, ...getOne_Section_Query, ...Section_Events_Query, ...getMany_Section_Query };

const Mutation = { ...Create_Section_Mutation, ...Update_Section_Mutation };

const Resolver = {};

const typeDef = [
  list_Section_TypeDefs,
  Create_Section_TypeDefs,
  Update_Section_TypeDefs,
  getOne_Section_TypeDefs,
  Section_Events_TypeDefs,
  getMany_Section_TypeDefs,
];

export const Section = {
  Query,
  Mutation,
  Resolver,
  typeDef,
};
