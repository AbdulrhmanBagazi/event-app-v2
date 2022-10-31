import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_applicants_TypeDefs = gql`
  type Query {
    applicants(id: String!): Applicants
  }
`;

export const getOne_applicants_Query = {
  applicants: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.applicants.findUnique({
      where: {
        id: args.id,
      },
      include: {
        job: true,
        shift: true,
      },
    });
  },
};
