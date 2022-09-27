import { Context } from '../../../../../../context';
import { gql } from 'apollo-server';
import { eventType, Order } from '../types';

export const list_Events_TypeDefs = gql`
  type Query {
    Events_list(page: Int, perPage: Int, sortOrder: Order): [Events!]!
    Events_list_meta: ListMetadata
  }

  type ListMetadata {
    total: Int!
  }

  type Events {
    id: String!
    published: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    companyId: String!
    locationId: String!
    title: String!
    content: String!
    title_en: String!
    content_en: String!
    image_url: String!
    location_url: String!
    status: EventStatus!
    companyLogo: String!
  }

  enum Order {
    desc
    asc
  }

  enum EventStatus {
    SOON
    ACTIVE
    COMPLETED
  }

  scalar DateTime
`;

export const list_Events_Query = {
  Events_list: async (_parent, args: { page: number; perPage: number; sortOrder: Order }, context: Context) => {
    const order = args.sortOrder;

    const data = await context.prisma.events.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        createdAt: order,
      },
      where: {
        published: true,
      },
    });
    return data;
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  Events_list_meta: async (_parent, _args: {}, context: Context) => {
    const cal = await context.prisma.events.aggregate({
      _count: {
        id: true,
      },
      where: {
        published: true,
      },
    });

    const total = cal._count.id;

    return { total };
  },
};

export const list_Events_Resolver = {
  Events: {
    companyLogo: async (parent: eventType, _args, context: Context) => {
      const Logo = await context.prisma.companies.findFirst({
        where: { id: parent.companyId },
      });

      return Logo?.logo_url;
    },
  },
};
