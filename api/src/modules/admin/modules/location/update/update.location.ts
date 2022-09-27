import { Context } from '../../../../../context';
import { LocationUpdate } from '../types';
import { gql } from 'apollo-server';

export const Update_Location_TypeDefs = gql`
  type Mutation {
    update_Location(id: String!, data: update_Location): Location
  }

  input update_Location {
    title: String
    title_en: String
  }
`;

export const Update_Location_Mutation = {
  update_Location: async (_parent, args: { id: string; data: LocationUpdate }, context: Context) => {
    const updateLocation = await context.prisma.location.update({
      where: {
        id: args.id,
      },
      data: {
        title: args.data.title,
        title_en: args.data.title_en,
      },
    });

    return updateLocation;
  },
};
