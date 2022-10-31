import { Context } from '../../../../../context';
import { gql } from 'apollo-server';
import { eventdaysFilterType } from '../../eventdays/types';

export const eventday_list_TypeDefs = gql`
  type Query {
    eventday_list(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): [eventday!]!
    eventday_list_meta(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): ListMetadata
  }

  type eventday {
    id: String
    date: Date
    status: EventDaysStatus
  }

  enum EventDaysStatus {
    SOON
    ACTIVE
    COMPLETED
  }

  type ListMetadata {
    count: Int!
  }

  scalar Date
`;

export const eventday_list_Query = {
  eventday_list: async (
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
  eventday_list_meta: async (
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
