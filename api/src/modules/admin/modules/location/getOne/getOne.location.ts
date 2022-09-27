import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Location_TypeDefs = gql`
  type Query {
    Location(id: String!): Event
  }
`;

export const getOne_Location_Query = {
  Location: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.location.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
