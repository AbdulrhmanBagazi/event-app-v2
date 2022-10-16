import { Create_Event_Mutation, Create_Event_TypeDefs } from './create/create.events';
import { getMany_Event_Query, getMany_Event_TypeDefs } from './getMany/getMany.events';
import { eventjob_Events_Query, eventjob_Events_TypeDefs } from './getManyReference/eventjob.events';
import { eventshift_Events_Query, eventshift_Events_TypeDefs } from './getManyReference/eventshift.events';
import { getOne_Events_Query, getOne_Events_TypeDefs } from './getOne/getOne.events';
import { list_Events_Query, list_Events_TypeDefs } from './list/list.events';
import { Update_Events_Mutation, Update_Events_TypeDefs } from './update/update.events';

const Query = {
  ...list_Events_Query,
  ...getOne_Events_Query,
  ...getMany_Event_Query,
  ...eventjob_Events_Query,
  ...eventshift_Events_Query,
};

const Mutation = { ...Update_Events_Mutation, ...Create_Event_Mutation };

const Resolver = {};

const typeDef = [
  list_Events_TypeDefs,
  getOne_Events_TypeDefs,
  Update_Events_TypeDefs,
  Create_Event_TypeDefs,
  getMany_Event_TypeDefs,
  eventjob_Events_TypeDefs,
  eventshift_Events_TypeDefs,
];

export const Events = {
  Query,
  Mutation,
  Resolver,
  typeDef,
};
