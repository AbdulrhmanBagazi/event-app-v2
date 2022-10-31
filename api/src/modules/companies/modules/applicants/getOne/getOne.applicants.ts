import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_applicants_TypeDefs = gql`
  type Query {
    applicants(id: String!): Applicants
  }
`;

export const getOne_applicants_Query = {
  applicants: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.applicants.findFirst({
      where: {
        id: args.id,
        companyId: context.req.user.id,
      },
      include: {
        job: true,
        shift: true,
      },
    });
  },
};
