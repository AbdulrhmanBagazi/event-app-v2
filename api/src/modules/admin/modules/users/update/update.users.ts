import { Context } from '../../../../../context';
import { userType } from '../types';
import { gql } from 'apollo-server';

export const Update_Users_TypeDefs = gql`
  type Mutation {
    update_User(id: String!, data: update_User): User
  }

  input update_User {
    email: String!
    id: String!
    verfied: Boolean!
    suspended: Boolean!
    createdAt: DateTime
    postsCount: Int!
    Type: String!
  }

  type User {
    email: String!
    id: String!
    verfied: Boolean!
    suspended: Boolean!
    createdAt: DateTime
    postsCount: Int!
    Type: String!
  }

  scalar DateTime
`;

export const Update_Users_Mutation = {
  update_User: async (_parent, args: { id: string; data: userType }, context: Context) => {
    const updateUser = await context.prisma.user.update({
      where: {
        id: args.id,
      },
      data: {
        suspended: args.data.suspended,
      },
    });

    return updateUser;
  },
};
