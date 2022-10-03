import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getMany_app_section_TypeDefs = gql`
  type Query {
    app_section_getMany(ids: [String]): [app_section!]!
  }
`;

export const getMany_app_section_Query = {
  app_section_getMany: async (_parent, args: { ids: [string] }, context: Context) => {
    const data = await context.prisma.app_section.findMany({
      where: {
        id: { in: args.ids },
      },
    });
    // throw Error;
    return data;
  },
};
