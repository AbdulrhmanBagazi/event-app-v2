import { Event_ShiftsStatus } from '@prisma/client';
import { gql } from 'apollo-server';
import { Context } from '../../../../../context';

export const Create_Event_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_eventshift(data: create_eventshift): eventshift
  }

  input create_eventshift {
    start_time: String
    end_time: String
    status: Event_JobsStatus
    eventId: String
    companyId: String
  }
`;

export const Create_Event_Mutation = {
  create_eventshift: async (
    _parent,
    args: {
      data: {
        start_time: string;
        end_time: string;
        status: Event_ShiftsStatus;
        eventId: string;
        companyId: string;
      };
    },
    context: Context,
  ) => {
    try {
      const create_eventshift = await context.prisma.event_Shifts.create({
        data: {
          start_time: args.data.start_time,
          end_time: args.data.end_time,
          status: args.data.status,
          eventId: args.data.eventId,
          companyId: args.data.companyId,
        },
        include: {
          Event: true,
        },
      });

      return create_eventshift;
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
