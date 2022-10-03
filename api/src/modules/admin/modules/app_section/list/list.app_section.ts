import { Context } from '../../../../../context';
import { gql } from 'apollo-server';
import { app_sectionFilterType } from '../types';

export const list_app_section_TypeDefs = gql`
  type Query {
    app_section_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [app_section!]!
    app_section_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    published: Boolean
  }

  type app_section {
    id: String!
    title: String
    title_en: String
    createdAt: DateTime
    updatedAt: DateTime
    published: Boolean
  }

  scalar DateTime
`;

export const list_app_section_Query = {
  app_section_list: async (
    _parent,
    // eslint-disable-next-line @typescript-eslint/ban-types
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: app_sectionFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.app_section.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        published: args?.filter?.published,
      },
    });
    // throw Error;
    return data;
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  app_section_list_meta: async (_parent, args: { filter: app_sectionFilterType }, context: Context) => {
    const cal = await context.prisma.app_section.aggregate({
      where: {
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
