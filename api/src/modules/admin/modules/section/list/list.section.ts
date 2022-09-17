import { Context } from '../../../../../context';
import { sectionFilterType } from '../types';
import { gql } from 'apollo-server';

export const list_Section_TypeDefs = gql`
  type Query {
    Section_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [Section!]!
    Section_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    published: Boolean
  }

  type Section {
    id: String!
    published: Boolean
    title: String
    title_en: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  scalar DateTime
`;

export const list_Section_Query = {
  Section_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: sectionFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.section.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        published: args.filter?.published,
      },
    });
    // throw Error;
    return data;
  },
  Section_list_meta: async (_parent, args: { filter: sectionFilterType }, context: Context) => {
    const cal = await context.prisma.section.aggregate({
      where: {
        published: args.filter?.published,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};
