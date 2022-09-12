import { Prisma } from '@prisma/client';
import { gql, UserInputError } from 'apollo-server';
import { Context } from '../../../../../context';
import HashPassword from '../../../routes/authentication/utils/hashPassword.util';

export const Create_Companies_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_Companies(data: create_Companies): Companies
  }

  input create_Companies {
    name: String
    email: String
    password: String
  }

  type Companies {
    id: String
    email: String
    name: String
    createdAt: DateTime
  }

  scalar DateTime
`;

export const Create_Companies_Mutation = {
  create_Companies: async (
    _parent,
    args: { data: { name: string; email: string; password: string } },
    context: Context,
  ) => {
    try {
      const HashPass = await HashPassword(args.data.password);

      const createCompany = await context.prisma.companies.create({
        data: {
          email: args.data.email,
          name: args.data.name,
          password: HashPass,
        },
      });

      return createCompany;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new UserInputError('Email exists');
        }
      }
      throw Error('something whent wrong');
    }
  },
};
