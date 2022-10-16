import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getMany_eventshifts_TypeDefs = gql`
  type Query {
    eventshift_getMany(ids: [String]): [eventshift!]!
  }
`;

export const getMany_eventshifts_Query = {
  eventshift_getMany: async (_parent, args: { ids: [string] }, context: Context) => {
    const data = await context.prisma.event_Shifts.findMany({
      where: {
        id: { in: args.ids },
      },
    });
    // throw Error;
    return data;
  },
};
