import { Context } from '../../../../../context';
import { app_sectionUpdate } from '../types';
import { gql } from 'apollo-server';

export const Update_app_section_TypeDefs = gql`
  type Mutation {
    update_app_section(id: String!, data: update_app_section): app_section
  }

  input update_app_section {
    title: String
    title_en: String
    published: Boolean
  }
`;

export const Update_app_section_Mutation = {
  update_app_section: async (_parent, args: { id: string; data: app_sectionUpdate }, context: Context) => {
    const updateapp_section = await context.prisma.app_section.update({
      where: {
        id: args.id,
      },
      data: {
        title: args.data.title,
        title_en: args.data.title_en,
        published: args.data.published,
      },
    });

    return updateapp_section;
  },
};
