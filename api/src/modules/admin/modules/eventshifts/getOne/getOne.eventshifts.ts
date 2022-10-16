import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_eventshifts_TypeDefs = gql`
  type Query {
    eventshift(id: String!): eventshift
  }
`;

export const getOne_eventshifts_Query = {
  eventshift: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.event_Shifts.findUnique({
      where: {
        id: args.id,
      },
      include: {
        Event: true,
        company: true,
      },
    });
  },
};
