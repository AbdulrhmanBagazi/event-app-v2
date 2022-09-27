import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getMany_Location_TypeDefs = gql`
  type Query {
    Location_getMany(ids: [String]): [Location!]!
  }
`;

export const getMany_Location_Query = {
  Location_getMany: async (_parent, args: { ids: [string] }, context: Context) => {
    const data = await context.prisma.location.findMany({
      where: {
        id: { in: args.ids },
      },
    });
    // throw Error;
    return data;
  },
};
