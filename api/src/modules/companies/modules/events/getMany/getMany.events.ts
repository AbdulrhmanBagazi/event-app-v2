import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getMany_Event_TypeDefs = gql`
  type Query {
    Event_getMany(ids: [String]): [Event!]!
  }
`;

export const getMany_Event_Query = {
  Event_getMany: async (_parent, args: { ids: [string] }, context: Context) => {
    const data = await context.prisma.events.findMany({
      where: {
        id: { in: args.ids },
      },
    });
    // throw Error;
    return data;
  },
};
