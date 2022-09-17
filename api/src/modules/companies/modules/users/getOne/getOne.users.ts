import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Users_TypeDefs = gql`
  type Query {
    User(id: String!): User
  }

  type User {
    email: String!
    id: String!
    verfied: Boolean!
    suspended: Boolean!
    createdAt: DateTime
  }

  scalar DateTime
`;

export const getOne_Users_Query = {
  User: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
