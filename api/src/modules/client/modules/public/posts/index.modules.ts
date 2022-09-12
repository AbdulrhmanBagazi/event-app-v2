import { list_Posts_Query, list_Posts_TypeDefs } from './list/posts.list';

const Query = { ...list_Posts_Query };

// const Mutation = { ...Create_Posts_Mutation };

// const Resolver = { ...list_Users_Resolver };

const typeDef = [list_Posts_TypeDefs];

export const Posts = {
  Query,
  // Mutation,
  // Resolver,
  typeDef,
};
