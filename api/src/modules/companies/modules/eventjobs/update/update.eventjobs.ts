import { Context } from '../../../../../context';
import { eventjob } from '../types';
import { gql } from 'apollo-server';

export const Update_eventjobs_TypeDefs = gql`
  type Mutation {
    update_eventjob(id: String!, data: update_eventjob): eventjob
  }

  input update_eventjob {
    title: String
    title_en: String
    status: Event_JobsStatus
    rate: Int
    rate_type: Rate_type
  }

  scalar DateTime
`;

export const Update_eventjobs_Mutation = {
  update_eventjob: async (_parent, args: { id: string; data: eventjob }, context: Context) => {
    const updateeventjobs = await context.prisma.event_Jobs.update({
      where: {
        id: args.id,
      },
      data: {
        title: args.data.title,
        title_en: args.data.title_en,
        status: args.data.status,
        rate: args.data.rate,
        rate_type: args.data.rate_type,
      },
      include: {
        Event: true,
      },
    });

    return updateeventjobs;
  },
};
