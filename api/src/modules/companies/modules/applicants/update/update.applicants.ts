import { Context } from '../../../../../context';
import { gql } from 'apollo-server';
import { Applicants_Status } from '@prisma/client';
import SendNotification from '../../../../../oneSignal/sendNotification';

export const Update_Applicants_TypeDefs = gql`
  type Mutation {
    update_applicants(id: String!, data: update_applicants): Applicants
  }

  input update_applicants {
    status: Applicants_Status_Update
  }

  enum Applicants_Status_Update {
    CANCELED
    DECLINED
    WAITLIST
    PENDING
    INTERVIEW
    APPROVED
    COMPLETED
    INACTIVE
  }
`;

export const Update_Applicants_Mutation = {
  update_applicants: async (_parent, args: { id: string; data: { status: Applicants_Status } }, context: Context) => {
    const updateApplicant = await context.prisma.applicants.update({
      where: {
        id: args.id,
      },
      data: {
        status: args.data.status,
      },
      include: {
        job: true,
        shift: true,
        Event: true,
      },
    });

    const SendNoti = await SendNotification(
      args.data.status,
      updateApplicant.userId,
      updateApplicant.Event.title,
      updateApplicant.Event.title_en,
    );

    if (SendNoti) {
      return updateApplicant;
    }

    return updateApplicant;
  },
};
