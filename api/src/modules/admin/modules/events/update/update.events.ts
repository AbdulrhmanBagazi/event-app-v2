import { Context } from '../../../../../context';
import { eventType } from '../types';
import { gql } from 'apollo-server';
import { Prisma } from '@prisma/client';

export const Update_Events_TypeDefs = gql`
  type Mutation {
    update_Event(id: String!, data: update_Event): Event
  }

  input update_Event {
    published: Boolean
    status: EventStatus
    title: String
    content: String
    title_en: String
    content_en: String
    image_url: String
    location_url: String
    app_sectionId: String
    locationId: String
    details: [detail!]!
    details_en: [detail!]!
    eventcalendar: [String!]!
  }

  input detail {
    title: String
    content: String
  }

  scalar DateTime
`;

export const Update_Events_Mutation = {
  update_Event: async (_parent, args: { id: string; data: eventType }, context: Context) => {
    const json = args.data.details as Prisma.JsonArray;
    const json_en = args.data.details_en as Prisma.JsonArray;

    const updateEvents = await context.prisma.events.update({
      where: {
        id: args.id,
      },
      data: {
        published: args.data.published,
        status: args.data.status,
        title: args.data.title,
        content: args.data.content,
        title_en: args.data.title_en,
        content_en: args.data.content_en,
        image_url: args.data.image_url,
        location_url: args.data.location_url,
        app_sectionId: args.data.app_sectionId,
        locationId: args.data.locationId,
        details: json,
        details_en: json_en,
        eventcalendar: args.data.eventcalendar,
      },
      include: {
        Location: true,
        App_section: true,
      },
    });

    return updateEvents;
  },
};
