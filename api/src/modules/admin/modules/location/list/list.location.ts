import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const list_Location_TypeDefs = gql`
  type Query {
    Location_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [Location!]!
    Location_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    published: Boolean
  }

  type Location {
    id: String!
    title: String
    title_en: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  scalar DateTime
`;

export const list_Location_Query = {
  Location_list: async (
    _parent,
    // eslint-disable-next-line @typescript-eslint/ban-types
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: {} },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.location.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
    });
    // throw Error;
    return data;
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  Location_list_meta: async (_parent, _args: { filter: {} }, context: Context) => {
    const cal = await context.prisma.location.aggregate({
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};
