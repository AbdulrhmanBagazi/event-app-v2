import { Context } from '../../../../../context';
import { applicantsFilterType } from '../types';
import { gql } from 'apollo-server';
import { userProfileType } from '../../../../client/modules/protected/profile/types';

export const list_Applicants_TypeDefs = gql`
  type Query {
    applicants_list(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): [Applicants!]!
    applicants_list_meta(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: Filters): ListMetadata
  }

  type ListMetadata {
    count: Int!
  }

  input Filters {
    shiftId: String
    jobId: String
  }

  type Applicants {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    eventId: String
    companyId: String
    userId: String
    shiftId: String
    jobId: String
    name: String
    nationality: String
    nationalID: String
    dateOfBirth: String
    gender: String
    status: Applicants_Status
    contact: contactInfo
    event: event
  }

  type event {
    id: String
    title: String
    title_en: String
  }

  type contactInfo {
    phone: String
    whatsapp: String
  }

  enum Applicants_Status {
    CANCELED
    DECLINED
    WAITLIST
    PENDING
    INTERVIEW
    APPROVED
    COMPLETED
  }

  scalar DateTime
`;

export const list_Applicants_Query = {
  applicants_list: async (
    _parent,
    args: { page: number; perPage: number; sortField: string; sortOrder: string; filter: applicantsFilterType },
    context: Context,
  ) => {
    const order = args.sortOrder?.toLowerCase();
    const OrderField = args.sortField;

    const data = await context.prisma.applicants.findMany({
      skip: args.page * args.perPage,
      take: args.perPage,
      orderBy: {
        [OrderField]: order,
      },
      where: {
        status: args.filter?.status,
        eventId: args.filter.eventId,
        shiftId: args.filter.shiftId,
        jobId: args.filter.jobId,
      },
      include: {
        company: true,
      },
    });
    // throw Error;
    return data;
  },
  applicants_list_meta: async (_parent, args: { filter: applicantsFilterType }, context: Context) => {
    const cal = await context.prisma.applicants.aggregate({
      where: {
        status: args.filter?.status,
        eventId: args.filter.eventId,
        shiftId: args.filter.shiftId,
        jobId: args.filter.jobId,
      },
      _count: {
        id: true,
      },
    });

    const count = cal._count.id;

    return { count };
  },
};

export const list_Applicants_Resolver = {
  Applicants: {
    contact: async (parent: userProfileType, _args, context: Context) => {
      const contact = await context.prisma.profile.findFirst({
        where: { userId: parent.userId },
      });

      return {
        phone: contact?.phone,
        whatsapp: contact?.whatsapp,
      };
    },
    event: async (parent: applicantsFilterType, _args, context: Context) => {
      const event = await context.prisma.events.findFirst({
        where: { id: parent.eventId },
      });

      return {
        id: event?.id,
        title: event?.title,
        title_en: event?.title_en,
      };
    },
  },
};
