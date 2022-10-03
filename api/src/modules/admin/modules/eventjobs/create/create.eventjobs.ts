import { Event_JobsStatus, Rate_type } from '@prisma/client';
import { gql } from 'apollo-server';
import { Context } from '../../../../../context';

export const Create_Event_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_eventjob(data: create_eventjob): eventjob
  }

  input create_eventjob {
    title: String
    title_en: String
    status: Event_JobsStatus
    rate: Int
    rate_type: Rate_type
    eventId: String
    companyId: String
  }
`;

export const Create_Event_Mutation = {
  create_eventjob: async (
    _parent,
    args: {
      data: {
        title: string;
        title_en: string;
        status: Event_JobsStatus;
        rate: number;
        rate_type: Rate_type;
        eventId: string;
        companyId: string;
      };
    },
    context: Context,
  ) => {
    try {
      const create_eventjob = await context.prisma.event_Jobs.create({
        data: {
          title: args.data.title,
          title_en: args.data.title_en,
          status: args.data.status,
          rate: args.data.rate,
          rate_type: args.data.rate_type,
          eventId: args.data.eventId,
          companyId: args.data.companyId,
        },
        include: {
          Event: true,
        },
      });

      return create_eventjob;
    } catch (error) {
      // if (error instanceof Prisma.PrismaClientKnownRequestError) {
      //   if (error.code === 'P2002') {
      //     throw new UserInputError('Email exists');
      //   }
      // }
      throw Error('something whent wrong');
    }
  },
};
