import { Context } from '../../../../../context';
import { eventFilterType } from '../types';
import { gql } from 'apollo-server';

export const eventshift_Events_TypeDefs = gql`
  type Query {
    eventshiftEvents(
      page: Int
      perPage: Int
      sortField: String
      sortOrder: String
      filter: Filters
      target: String
      id: String
    ): [eventshift!]!
    eventshiftEvents_meta(
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

export const eventshift_Events_Query = {
  eventshiftEvents: async (
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
    const data = await context.prisma.event_Shifts.findMany({
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
  eventshiftEvents_meta: async (
    _parent,
    args: { filter: eventFilterType; target: string; id: string },
    context: Context,
  ) => {
    const cal = await context.prisma.event_Shifts.aggregate({
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
