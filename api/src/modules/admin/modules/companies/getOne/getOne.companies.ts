import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Companies_TypeDefs = gql`
  type Query {
    Companies(id: String!): Companies
  }
`;

export const getOne_Companies_Query = {
  Companies: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.companies.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
