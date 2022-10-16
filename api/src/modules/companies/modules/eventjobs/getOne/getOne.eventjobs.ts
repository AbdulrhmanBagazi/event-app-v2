import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_eventjobs_TypeDefs = gql`
  type Query {
    eventjob(id: String!): eventjob
  }
`;

export const getOne_eventjobs_Query = {
  eventjob: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.event_Jobs.findFirst({
      where: {
        id: args.id,
        companyId: context.req.user.id,
      },
      include: {
        Event: true,
      },
    });
  },
};
