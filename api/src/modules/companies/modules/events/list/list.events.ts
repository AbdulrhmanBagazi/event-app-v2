import { Context } from '../../../../../context';
import { eventFilterType } from '../types';
import { gql } from 'apollo-server';

export const list_Events_TypeDefs = gql`
  type Query {
    Event_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [Event!]!
    Event_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    published: Boolean
    status: EventStatus
    sectionId: String
  }

  type Event {
    id: String!
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
    status: EventStatus
    Section: Section
  }

  type Section {
    title: String
    title_en: String
    published: Boolean
  }

  enum EventStatus {
    SOON
    ACTIVE
    COMPLETED
  }

  scalar DateTime
`;

export const list_Events_Query = {
  Event_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: eventFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.events.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        published: args.filter?.published,
        status: args.filter?.status,
        sectionId: args.filter?.sectionId,
        companyId: context.req.user.id,
      },
      include: {
        Section: true,
      },
    });
    // throw Error;
    return data;
  },
  Event_list_meta: async (_parent, args: { filter: eventFilterType }, context: Context) => {
    const cal = await context.prisma.events.aggregate({
      where: {
        published: args.filter?.published,
        status: args.filter?.status,
        sectionId: args.filter?.sectionId,
        companyId: context.req.user.id,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};