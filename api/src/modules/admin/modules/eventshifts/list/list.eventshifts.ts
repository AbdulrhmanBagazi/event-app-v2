import { Context } from '../../../../../context';
import { eventshiftsFilterType } from '../types';
import { gql } from 'apollo-server';

export const list_eventshifts_TypeDefs = gql`
  type Query {
    eventshift_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [eventshift!]!
    eventshift_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    rate_type: String
    eventId: String
  }

  type eventshift {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    start_time: String
    end_time: String
    status: Event_JobsStatus
    eventId: String
    Event: Event
    companyId: String
    company: Companies
  }

  enum Event_ShiftsStatus {
    CLOSED
    OPEN
  }

  scalar DateTime
`;

export const list_eventshifts_Query = {
  eventshift_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: eventshiftsFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.event_Shifts.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        status: args.filter?.status,
        eventId: args.filter?.eventId,
        companyId: args.filter?.companyId,
      },
      include: {
        Event: true,
        company: true,
      },
    });
    // throw Error;
    return data;
  },
  eventshift_list_meta: async (_parent, args: { filter: eventshiftsFilterType }, context: Context) => {
    const cal = await context.prisma.event_Shifts.aggregate({
      where: {
        status: args.filter?.status,
        eventId: args.filter?.eventId,
        companyId: args.filter?.companyId,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};
