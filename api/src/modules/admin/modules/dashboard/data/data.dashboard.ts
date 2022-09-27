import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const data_Dashboard_TypeDefs = gql`
  type Query {
    DashboardData: Data
  }

  type Data {
    Users_count: Int
    Companies_count: Int
    Events_count: Int
    Locations_count: Int
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
    Users_count: (_parent, _args, context: Context) => {
      return context.prisma.user.count({});
    },
    Companies_count: (_parent, _args, context: Context) => {
      return context.prisma.companies.count({});
    },
    Events_count: (_parent, _args, context: Context) => {
      return context.prisma.events.count({});
    },
    Locations_count: (_parent, _args, context: Context) => {
      return context.prisma.location.count({});
    },
  },
};
