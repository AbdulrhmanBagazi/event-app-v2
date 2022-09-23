import { Context } from '../../../../../context';
import { sectionType } from '../types';
import { gql } from 'apollo-server';

export const Update_Section_TypeDefs = gql`
  type Mutation {
    update_Section(id: String!, data: update_Section): Section
  }

  input update_Section {
    published: Boolean
  }
`;

export const Update_Section_Mutation = {
  update_Section: async (_parent, args: { id: string; data: sectionType }, context: Context) => {
    const updateSection = await context.prisma.section.update({
      where: {
        id: args.id,
      },
      data: {
        published: args.data.published,
      },
    });

    return updateSection;
  },
};
