import { Create_Event_Mutation, Create_Event_TypeDefs } from './create/create.eventshifts';
import { getMany_eventshifts_Query, getMany_eventshifts_TypeDefs } from './getMany/getMany.eventshifts';
import { getOne_eventshifts_Query, getOne_eventshifts_TypeDefs } from './getOne/getOne.eventshifts';
import { list_eventshifts_Query, list_eventshifts_TypeDefs } from './list/list.eventshifts';
import { Update_eventshifts_Mutation, Update_eventshifts_TypeDefs } from './update/update.eventshifts';

const Query = { ...list_eventshifts_Query, ...getOne_eventshifts_Query, ...getMany_eventshifts_Query };

const Mutation = { ...Update_eventshifts_Mutation, ...Create_Event_Mutation };

// const Resolver = {};

const typeDef = [
  list_eventshifts_TypeDefs,
  getOne_eventshifts_TypeDefs,
  Update_eventshifts_TypeDefs,
  Create_Event_TypeDefs,
  getMany_eventshifts_TypeDefs,
];

export const eventshifts = {
  Query,
  Mutation,
  // Resolver,
  typeDef,
};
