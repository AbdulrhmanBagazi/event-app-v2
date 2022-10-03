import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_app_section_TypeDefs = gql`
  type Query {
    app_section(id: String!): Event
  }
`;

export const getOne_app_section_Query = {
  app_section: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.app_section.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
