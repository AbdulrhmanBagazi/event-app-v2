import { Context } from '../../../../../context';
import { eventshift } from '../types';
import { gql } from 'apollo-server';

export const Update_eventshifts_TypeDefs = gql`
  type Mutation {
    update_eventshift(id: String!, data: update_eventshift): eventshift
  }

  input update_eventshift {
    start_time: String
    end_time: String
    status: Event_JobsStatus
  }

  scalar DateTime
`;

export const Update_eventshifts_Mutation = {
  update_eventshift: async (_parent, args: { id: string; data: eventshift }, context: Context) => {
    const updateeventshifts = await context.prisma.event_Shifts.update({
      where: {
        id: args.id,
      },
      data: {
        start_time: args.data.start_time,
        end_time: args.data.end_time,
        status: args.data.status,
        eventId: args.data.eventId,
        companyId: args.data.companyId,
      },
      include: {
        Event: true,
      },
    });

    return updateeventshifts;
  },
};
