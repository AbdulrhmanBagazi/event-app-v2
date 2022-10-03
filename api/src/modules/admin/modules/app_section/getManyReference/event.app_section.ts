import { Context } from '../../../../../context';
import { eventFilterType } from '../types';
import { gql } from 'apollo-server';

export const app_section_Events_TypeDefs = gql`
  type Query {
    app_sectionEvents(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): [Event!]!
    app_sectionEvents_meta(
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
`;

export const app_section_Events_Query = {
  app_sectionEvents: async (
    _parent,
    args: {
      page: number;
      perPage: number;
      sortField: string;
      sortOrder: string;
      filter: eventFilterType;
      target: string;
      id: string;
    },
    context: Context,
  ) => {
    const data = await context.prisma.events.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [args.sortField]: args.sortOrder?.toLowerCase(),
      },
      where: {
        app_sectionId: args.id,
        published: args?.filter?.published,
      },
    });

    return data;
  },
  app_sectionEvents_meta: async (
    _parent,
    args: { filter: eventFilterType; target: string; id: string },
    context: Context,
  ) => {
    const cal = await context.prisma.events.aggregate({
      where: {
        app_sectionId: args.id,
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
