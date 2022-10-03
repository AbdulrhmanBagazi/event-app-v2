import { Create_Event_Mutation, Create_Event_TypeDefs } from './create/create.eventjobs';
import { getOne_eventjobs_Query, getOne_eventjobs_TypeDefs } from './getOne/getOne.eventjobs';
import { list_eventjobs_Query, list_eventjobs_TypeDefs } from './list/list.eventjobs';
import { Update_eventjobs_Mutation, Update_eventjobs_TypeDefs } from './update/update.eventjobs';

const Query = { ...list_eventjobs_Query, ...getOne_eventjobs_Query };

const Mutation = { ...Update_eventjobs_Mutation, ...Create_Event_Mutation };

// const Resolver = {};

const typeDef = [list_eventjobs_TypeDefs, getOne_eventjobs_TypeDefs, Update_eventjobs_TypeDefs, Create_Event_TypeDefs];

export const eventjobs = {
  Query,
  Mutation,
  // Resolver,
  typeDef,
};
