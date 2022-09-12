import { Context } from '../../../../../context';
import { postFilterType } from '../types';
import { gql } from 'apollo-server';

export const User_Posts_TypeDefs = gql`
  type Query {
    UserPosts(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): [Post]
    UserPosts_meta(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    published: Boolean
  }

  type Post {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    content: String!
    published: Boolean!
    viewCount: Int!
    authorId: String!
  }

  scalar DateTime
`;

export const User_Posts_Query = {
  UserPosts: async (
    _parent,
    args: {
      page: number;
      perPage: number;
      sortField: string;
      sortOrder: string;
      filter: postFilterType;
      target: string;
      id: string;
    },
    context: Context,
  ) => {
    const data = await context.prisma.post.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [args.sortField]: args.sortOrder?.toLowerCase(),
      },
      where: {
        authorId: args.id,
      },
    });

    return data;
  },
  UserPosts_meta: async (_parent, args: { filter: postFilterType; target: string; id: string }, context: Context) => {
    const cal = await context.prisma.post.aggregate({
      where: {
        authorId: args.id,
        published: args?.filter?.published,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};
