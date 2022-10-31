import { Create_EventDays_Mutation, Create_EventDays_TypeDefs } from './create/create.eventdays';
import { eventday_list_Query, eventday_list_TypeDefs } from './list/list.eventdays';

const Query = { ...eventday_list_Query };

const Mutation = { ...Create_EventDays_Mutation };

// const Resolver = {};

const typeDef = [Create_EventDays_TypeDefs, eventday_list_TypeDefs];

export const eventdays = {
  Query,
  Mutation,
  // Resolver,
  typeDef,
};
