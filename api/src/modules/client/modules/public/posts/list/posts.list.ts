import { Context } from '../../../../../../context';
import { gql } from 'apollo-server';
import { Order } from '../types';

export const list_Posts_TypeDefs = gql`
  type Query {
    Posts_list(page: Int, perPage: Int, sortOrder: Order): [Post!]!
    Posts_list_meta: ListMetadata
  }

  type ListMetadata {
    total: Int!
  }

  type Post {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    title: String
    content: String
    published: Boolean
  }

  enum Order {
    desc
    asc
  }

  scalar DateTime
`;

export const list_Posts_Query = {
  Posts_list: async (_parent, args: { page: number; perPage: number; sortOrder: Order }, context: Context) => {
    const order = args.sortOrder;

    const data = await context.prisma.post.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        createdAt: order,
      },
    });
    return data;
  },
  Posts_list_meta: async (_parent, _args, context: Context) => {
    const cal = await context.prisma.post.aggregate({
      _count: {
        id: true,
      },
    });

    const total = cal._count.id;

    return { total };
  },
};
