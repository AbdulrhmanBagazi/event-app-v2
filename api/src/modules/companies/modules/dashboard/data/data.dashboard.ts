import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const data_Dashboard_TypeDefs = gql`
  type Query {
    DashboardData: Data
  }

  type Data {
    Events_count: Int
    Jobs_count: Int
    Shifts_count: Int
  }
`;

export const data_Dashboard_Query = {
  DashboardData: async (_parent, _args, _context: Context) => {
    // throw Error;
    return 'Data';
  },
};

export const data_Dashboard_Resolver = {
  Data: {
    Events_count: (_parent, _args, context: Context) => {
      return context.prisma.events.count({
        where: {
          companyId: context.req.user.id,
        },
      });
    },
    Jobs_count: (_parent, _args, context: Context) => {
      return context.prisma.event_Jobs.count({
        where: {
          companyId: context.req.user.id,
        },
      });
    },
    Shifts_count: (_parent, _args, context: Context) => {
      return context.prisma.event_Shifts.count({
        where: {
          companyId: context.req.user.id,
        },
      });
    },
  },
};
