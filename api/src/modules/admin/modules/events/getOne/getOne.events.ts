import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Events_TypeDefs = gql`
  type Query {
    Event(id: String!): Event
  }
`;

export const getOne_Events_Query = {
  Event: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.events.findUnique({
      where: {
        id: args.id,
      },
      include: {
        Location: true,
        App_section: true,
        company: true,
      },
    });
  },
};
