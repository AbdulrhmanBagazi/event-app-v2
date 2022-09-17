import { Context } from '../../../../../context';
import { companiesTypeFilterType } from '../types';
import { gql } from 'apollo-server';

export const list_Companies_TypeDefs = gql`
  type Query {
    Companies_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [Companies!]!
    Companies_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    email: String
    suspended: Boolean
  }

  type Companies {
    id: String!
    email: String!
    name: String!
    suspended: Boolean!
    createdAt: DateTime
    logo_url: String
  }

  scalar DateTime
`;

export const list_Companies_Query = {
  Companies_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: companiesTypeFilterType },
    context: Context,
  ) => {
    const data = await context.prisma.companies.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [args.sortField]: args.sortOrder?.toLowerCase(),
      },
      where: {
        email: { contains: args.filter?.email },
        suspended: args.filter?.suspended,
      },
    });
    // throw Error;
    return data;
  },
  Companies_list_meta: async (_parent, args: { filter: companiesTypeFilterType }, context: Context) => {
    const cal = await context.prisma.companies.aggregate({
      where: {
        email: { contains: args.filter?.email },
        suspended: args.filter?.suspended,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};
