import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Events_TypeDefs = gql`
  type Query {
    Event(id: String!): Event
  }
`;

export const getOne_Events_Query = {
  Event: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.events.findFirst({
      where: {
        id: args.id,
        companyId: context.req.user.id,
      },
      include: {
        Location: true,
      },
    });
  },
};
