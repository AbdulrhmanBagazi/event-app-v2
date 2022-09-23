import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getMany_Section_TypeDefs = gql`
  type Query {
    Section_getMany(ids: [String]): [Section!]!
  }
`;

export const getMany_Section_Query = {
  Section_getMany: async (_parent, args: { ids: [string] }, context: Context) => {
    const data = await context.prisma.section.findMany({
      where: {
        id: { in: args.ids },
      },
    });
    // throw Error;
    return data;
  },
};
