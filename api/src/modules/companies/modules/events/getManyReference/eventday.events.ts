import { Context } from '../../../../../context';
import { gql } from 'apollo-server';
import { eventdaysFilterType } from '../../eventdays/types';

export const eventday_Events_TypeDefs = gql`
  type Query {
    eventdayEvents(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): [eventday!]!
    eventdayEvents_meta(
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
`;

export const eventday_Events_Query = {
  eventdayEvents: async (
    _parent,
    args: {
      page: number;
      perPage: number;
      sortField: string;
      sortOrder: string;
      filter: eventdaysFilterType;
      target: string;
      id: string;
    },
    context: Context,
  ) => {
    const data = await context.prisma.event_Days.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [args.sortField]: args.sortOrder?.toLowerCase(),
      },
      where: {
        eventId: args.id,
      },
    });

    return data;
  },
  eventdayEvents_meta: async (
    _parent,
    args: { filter: eventdaysFilterType; target: string; id: string },
    context: Context,
  ) => {
    const cal = await context.prisma.event_Days.aggregate({
      where: {
        eventId: args.id,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};
