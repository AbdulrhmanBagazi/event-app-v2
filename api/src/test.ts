// import { ErrorMessage } from '../../../errors.message';

// User: async (_parent, args: { id: number }, context: Context) => {
//   try {
//     if (args.id <= 0) {
//       return {
//         __typename: 'getUserError',
//         message: ErrorMessage.invalidId,
//       };
//     }

//     const User = await context.prisma.user.findUnique({
//       where: {
//         id: args.id,
//       },
//     });

//     if (!User) {
//       return {
//         __typename: 'getUserError',
//         message: ErrorMessage.userNotFound,
//       };
//     }

//     return {
//       __typename: 'user',
//       ...User,
//     };
//   } catch (error) {
//     return {
//       __typename: 'getUserError',
//       message: ErrorMessage.internal_server_error,
//     };
//   }
// },
