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
    id: String
    companyId: String
    sectionId: String
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
  }

  type Event {
    id: String!
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    companyId: String
    sectionId: String
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
    status: EventStatus
  }

  scalar DateTime
`;

export const Create_Event_Mutation = {
  create_Event: async (
    _parent,
    args: {
      data: {
        id: string;
        title: string;
        content: string;
        title_en: string;
        content_en: string;
        image_url: string;
        location_url: string;
        sectionId: string;
        companyId: string;
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
          sectionId: args.data.sectionId,
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

///$argon2id$v=19$m=4096,t=3,p=1$RfeKJNQue0vJxotiXA3b6w$OTi77qIgHAbbF4wNRZxXVw4l0D7rFLR37vNwa0RvuGI
