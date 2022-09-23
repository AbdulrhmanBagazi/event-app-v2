import { Context } from '../../../../../context';
import { update_User } from '../types';
import { gql } from 'apollo-server';

export const Update_Users_TypeDefs = gql`
  type Mutation {
    update_User(id: String!, data: update_User): User
  }

  input update_User {
    suspended: Boolean!
  }
`;

export const Update_Users_Mutation = {
  update_User: async (_parent, args: { id: string; data: update_User }, context: Context) => {
    const updateUser = await context.prisma.user.update({
      where: {
        id: args.id,
      },
      data: {
        suspended: args.data.suspended,
      },
    });

    return updateUser;
  },
};
