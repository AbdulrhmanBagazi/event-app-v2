import { Context } from '../../../../../../context';
import { gql } from 'apollo-server';

export const Create_Posts_TypeDefs = gql`
  type Query {
    test: String
  }

  type Mutation {
    create_Post(title: String, content: String, published: Boolean): Post
  }

  type Post {
    id: String
    createdAt: DateTime
    updatedAt: DateTime
    title: String
    content: String
    published: Boolean
  }

  scalar DateTime
`;

export const Create_Posts_Mutation = {
  create_Post: async (_parent, args: { title: string; content: string; published: boolean }, context: Context) => {
    const createPost = await context.prisma.post.create({
      data: {
        ...args,
        authorId: context.req.user.id,
      },
    });

    return createPost;
  },
};
