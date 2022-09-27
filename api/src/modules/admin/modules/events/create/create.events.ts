import { Prisma } from '@prisma/client';
import { gql, UserInputError } from 'apollo-server';
import { Context } from '../../../../../context';

export const Create_Event_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_Event(data: create_Event): Event
  }

  input create_Event {
    companyId: String
    locationId: String
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
  }
`;

export const Create_Event_Mutation = {
  create_Event: async (
    _parent,
    args: {
      data: {
        locationId: string;
        companyId: string;
        title: string;
        content: string;
        title_en: string;
        content_en: string;
        image_url: string;
        location_url: string;
      };
    },
    context: Context,
  ) => {
    try {
      const createCompany = await context.prisma.events.create({
        data: {
          companyId: args.data.companyId,
          title: args.data.title,
          content: args.data.content,
          title_en: args.data.title_en,
          content_en: args.data.content_en,
          image_url: args.data.image_url,
          location_url: args.data.location_url,
          locationId: args.data.locationId,
        },
        include: {
          Location: true,
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
