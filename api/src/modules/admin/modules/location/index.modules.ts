import { Create_Location_Mutation, Create_Location_TypeDefs } from './create/create.location';
import { getMany_Location_Query, getMany_Location_TypeDefs } from './getMany/getMany.Location';
import { Location_Events_Query, Location_Events_TypeDefs } from './getManyReference/event.Location';
import { getOne_Location_Query, getOne_Location_TypeDefs } from './getOne/getOne.location';
import { list_Location_Query, list_Location_TypeDefs } from './list/list.Location';
import { Update_Location_Mutation, Update_Location_TypeDefs } from './update/update.Location';

const Query = { ...list_Location_Query, ...getOne_Location_Query, ...Location_Events_Query, ...getMany_Location_Query };

const Mutation = { ...Create_Location_Mutation, ...Update_Location_Mutation };

const Resolver = {};

const typeDef = [
  list_Location_TypeDefs,
  Create_Location_TypeDefs,
  Update_Location_TypeDefs,
  getOne_Location_TypeDefs,
  Location_Events_TypeDefs,
  getMany_Location_TypeDefs,
];

export const Location = {
  Query,
  Mutation,
  Resolver,
  typeDef,
};
