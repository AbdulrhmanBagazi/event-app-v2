import { Prisma } from '@prisma/client';
import { gql, UserInputError } from 'apollo-server';
import { Context } from '../../../../../context';

export const Create_Section_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_Section(data: create_Section): Section
  }

  input create_Section {
    title: String
    title_en: String
  }

  scalar DateTime
`;

export const Create_Section_Mutation = {
  create_Section: async (
    _parent,
    args: {
      data: {
        id: string;
        title: string;
        title_en: string;
      };
    },
    context: Context,
  ) => {
    try {
      const createSection = await context.prisma.section.create({
        data: {
          title: args.data.title,
          title_en: args.data.title_en,
        },
      });

      return createSection;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new UserInputError('input error');
      }
      throw Error('something whent wrong');
    }
  },
};

///$argon2id$v=19$m=4096,t=3,p=1$RfeKJNQue0vJxotiXA3b6w$OTi77qIgHAbbF4wNRZxXVw4l0D7rFLR37vNwa0RvuGI
