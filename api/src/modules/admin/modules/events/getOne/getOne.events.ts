import { Context } from '../../../../../context';
import { gql } from 'apollo-server';

export const getOne_Events_TypeDefs = gql`
  type Query {
    Event(id: String!): Event
  }

  type Event {
    id: String!
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    companyId: String
    sectionId: String
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
    status: EventStatus
  }

  scalar DateTime
`;

export const getOne_Events_Query = {
  Event: (_parent, args: { id: string }, context: Context) => {
    return context.prisma.events.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
