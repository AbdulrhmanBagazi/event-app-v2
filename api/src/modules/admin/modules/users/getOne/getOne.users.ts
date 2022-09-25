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
    createdAt: DateTime!
    Type: String!
    Profile: Profile
  }

  type Profile {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    userId: String
    firstName: String
    lastName: String
    nationality: String
    nationalID: String
    dateOfBirth: String
    gender: String
    whatsapp: String
    phone: String
  }

  scalar DateTime
`;

export const getOne_Users_Query = {
  User: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
      select: {
        email: true,
        id: true,
        verfied: true,
        suspended: true,
        createdAt: true,
        Type: true,
        Profile: true,
      },
    });
  },
};
