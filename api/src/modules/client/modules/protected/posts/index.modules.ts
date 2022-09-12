import { Create_Posts_Mutation, Create_Posts_TypeDefs } from './create/posts.create';

// const Query = {};

const Mutation = { ...Create_Posts_Mutation };

// const Resolver = { ...list_Users_Resolver };

const typeDef = [Create_Posts_TypeDefs];

export const Posts = {
  // Query,
  Mutation,
  // Resolver,
  typeDef,
};
