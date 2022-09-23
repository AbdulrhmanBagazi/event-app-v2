import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Section_TypeDefs = gql`
  type Query {
    Section(id: String!): Event
  }
`;

export const getOne_Section_Query = {
  Section: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.section.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
