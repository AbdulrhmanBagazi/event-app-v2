import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getMany_Companies_TypeDefs = gql`
  type Query {
    Companies_getMany(ids: [String]): [Companies!]!
  }
`;

export const getMany_Companies_Query = {
  Companies_getMany: async (_parent, args: { ids: [string] }, context: Context) => {
    const data = await context.prisma.companies.findMany({
      where: {
        id: { in: args.ids },
      },
    });
    // throw Error;
    return data;
  },
};
