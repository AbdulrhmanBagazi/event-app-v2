import { gql } from 'apollo-server';
import { Context } from '../../../../../context';

export const Create_EventDays_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_eventday(data: create_eventjob): eventday
  }

  input create_eventday {
    date: Date
    eventId: String
  }

  scalar Date
`;

export const Create_EventDays_Mutation = {
  create_eventday: async (
    _parent,
    args: {
      data: {
        date: Date;
        eventId: string;
      };
    },
    context: Context,
  ) => {
    try {
      console.log(args);

      throw Error('something whent wrong');

      const create_eventday = await context.prisma.event_Days.create({
        data: {
          date: args.data.date,
          eventId: args.data.eventId,
        },
        include: {
          Event: true,
        },
      });

      return create_eventday;
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
