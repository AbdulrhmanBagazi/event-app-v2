import { Create_Event_Mutation, Create_Event_TypeDefs } from './create/create.events';
import { getOne_Events_Query, getOne_Events_TypeDefs } from './getOne/getOne.events';
import { list_Events_Query, list_Events_TypeDefs } from './list/list.events';
import { Update_Events_Mutation, Update_Events_TypeDefs } from './update/update.events';

const Query = { ...list_Events_Query, ...getOne_Events_Query };

const Mutation = { ...Update_Events_Mutation, ...Create_Event_Mutation };

// const Resolver = {};

const typeDef = [list_Events_TypeDefs, getOne_Events_TypeDefs, Update_Events_TypeDefs, Create_Event_TypeDefs];

export const Events = {
  Query,
  Mutation,
  // Resolver,
  typeDef,
};
