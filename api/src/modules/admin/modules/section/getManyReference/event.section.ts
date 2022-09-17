import { Context } from '../../../../../context';
import { eventFilterType } from '../types';
import { gql } from 'apollo-server';

export const Section_Events_TypeDefs = gql`
  type Query {
    SectionEvents(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): [Event]
    SectionEvents_meta(
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

  type Event {
    id: String!
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    companyId: String
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
    status: EventStatus
  }

  scalar DateTime
`;

export const Section_Events_Query = {
  SectionEvents: async (
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
        sectionId: args.id,
        published: args?.filter?.published,
      },
    });

    return data;
  },
  SectionEvents_meta: async (
    _parent,
    args: { filter: eventFilterType; target: string; id: string },
    context: Context,
  ) => {
    const cal = await context.prisma.events.aggregate({
      where: {
        sectionId: args.id,
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
