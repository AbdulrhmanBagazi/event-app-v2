import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_eventshifts_TypeDefs = gql`
  type Query {
    eventshift(id: String!): eventshift
  }
`;

export const getOne_eventshifts_Query = {
  eventshift: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.event_Shifts.findFirst({
      where: {
        id: args.id,
        companyId: context.req.user.id,
      },
      include: {
        Event: true,
      },
    });
  },
};
