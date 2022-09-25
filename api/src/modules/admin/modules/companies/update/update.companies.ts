import { Context } from '../../../../../context';
import { companiesType } from '../types';
import { gql } from 'apollo-server';

export const Update_Companies_TypeDefs = gql`
  type Mutation {
    update_Companies(id: String!, data: update_Companies): Companies
  }

  input update_Companies {
    suspended: Boolean!
    logo_url: String
    contact: String
    email: String
    name: String
  }
`;

export const Update_Companies_Mutation = {
  update_Companies: async (_parent, args: { id: string; data: companiesType }, context: Context) => {
    const updateCompanies = await context.prisma.companies.update({
      where: {
        id: args.id,
      },
      data: {
        suspended: args.data.suspended,
        logo_url: args.data.logo_url,
      },
    });

    return updateCompanies;
  },
};
