import { Context } from '../../../../../context';
import { eventjobsFilterType } from '../types';
import { gql } from 'apollo-server';

export const list_eventjobs_TypeDefs = gql`
  type Query {
    eventjob_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [eventjob!]!
    eventjob_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    rate_type: String
    eventId: String
    companyId: String
  }

  type eventjob {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    title: String
    title_en: String
    status: Event_JobsStatus
    rate: Int
    rate_type: Rate_type
    eventId: String
    Event: Event
    company: Companies
    companyId: String
  }

  enum Event_JobsStatus {
    CLOSED
    OPEN
  }

  enum Rate_type {
    MONTHLY
    DAY
  }

  scalar DateTime
`;

export const list_eventjobs_Query = {
  eventjob_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: eventjobsFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.event_Jobs.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        status: args.filter?.status,
        rate_type: args.filter?.rate_type,
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
  eventjob_list_meta: async (_parent, args: { filter: eventjobsFilterType }, context: Context) => {
    const cal = await context.prisma.event_Jobs.aggregate({
      where: {
        status: args.filter?.status,
        rate_type: args.filter.rate_type,
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
