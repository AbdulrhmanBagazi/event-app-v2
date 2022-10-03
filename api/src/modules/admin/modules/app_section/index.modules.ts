import { Create_app_section_Mutation, Create_app_section_TypeDefs } from './create/create.app_section';
import { getMany_app_section_Query, getMany_app_section_TypeDefs } from './getMany/getMany.app_section';
import { app_section_Events_Query, app_section_Events_TypeDefs } from './getManyReference/event.app_section';
import { getOne_app_section_Query, getOne_app_section_TypeDefs } from './getOne/getOne.app_section';
import { list_app_section_Query, list_app_section_TypeDefs } from './list/list.app_section';
import { Update_app_section_Mutation, Update_app_section_TypeDefs } from './update/update.app_section';

const Query = {
  ...list_app_section_Query,
  ...getOne_app_section_Query,
  ...app_section_Events_Query,
  ...getMany_app_section_Query,
};

const Mutation = { ...Create_app_section_Mutation, ...Update_app_section_Mutation };

// const Resolver = {};

const typeDef = [
  list_app_section_TypeDefs,
  Create_app_section_TypeDefs,
  Update_app_section_TypeDefs,
  getOne_app_section_TypeDefs,
  app_section_Events_TypeDefs,
  getMany_app_section_TypeDefs,
];

export const AppSection = {
  Query,
  Mutation,
  // Resolver,
  typeDef,
};
