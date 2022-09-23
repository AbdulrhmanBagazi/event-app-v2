import { Create_Companies_Mutation, Create_Companies_TypeDefs } from './create/create.companies';
import { getMany_Companies_Query, getMany_Companies_TypeDefs } from './getMany/getMany.companies';
import { Companies_Events_Query, Companies_Events_TypeDefs } from './getManyReference/event.companies';
import { getOne_Companies_Query, getOne_Companies_TypeDefs } from './getOne/getOne.companies';
import { list_Companies_Query, list_Companies_TypeDefs } from './list/list.companies';
import { Update_Companies_Mutation, Update_Companies_TypeDefs } from './update/update.companies';

const Query = {
  ...list_Companies_Query,
  ...getOne_Companies_Query,
  ...Companies_Events_Query,
  ...getMany_Companies_Query,
};

const Mutation = { ...Create_Companies_Mutation, ...Update_Companies_Mutation };

const typeDef = [
  list_Companies_TypeDefs,
  Create_Companies_TypeDefs,
  getOne_Companies_TypeDefs,
  Update_Companies_TypeDefs,
  Companies_Events_TypeDefs,
  getMany_Companies_TypeDefs,
];

export const Companies = {
  Query,
  Mutation,
  typeDef,
};
