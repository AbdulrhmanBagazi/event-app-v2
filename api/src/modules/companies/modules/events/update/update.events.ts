import { Context } from '../../../../../context';
import { update_Event } from '../types';
import { gql } from 'apollo-server';

export const Update_Events_TypeDefs = gql`
  type Mutation {
    update_Event(id: String!, data: update_Event): Event
  }

  input update_Event {
    status: EventStatus
  }
`;

export const Update_Events_Mutation = {
  update_Event: async (_parent, args: { id: string; data: update_Event }, context: Context) => {
    const updateEvents = await context.prisma.events.update({
      where: {
        id: args.id,
      },
      data: {
        status: args.data.status,
      },
      include: {
        Section: true,
      },
    });

    return updateEvents;
  },
};
