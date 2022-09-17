import { Context } from '../../../../../context';
import { userFilterType } from '../types';
import { gql } from 'apollo-server';

export const list_Users_TypeDefs = gql`
  type Query {
    User_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [User!]!
    User_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    email: String
    verfied: Boolean
    suspended: Boolean
  }

  type User {
    email: String!
    id: String!
    verfied: Boolean!
    suspended: Boolean!
    createdAt: DateTime
    Type: String!
  }

  scalar DateTime
`;

export const list_Users_Query = {
  User_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: userFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.user.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        email: { contains: args.filter?.email },
        verfied: args.filter?.verfied,
        suspended: args.filter?.suspended,
      },
    });
    // throw Error;
    return data;
  },
  User_list_meta: async (_parent, args: { filter: userFilterType }, context: Context) => {
    const cal = await context.prisma.user.aggregate({
      where: {
        email: { contains: args.filter?.email },
        verfied: args.filter?.verfied,
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
