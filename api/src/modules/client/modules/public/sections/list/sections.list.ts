import { Context } from '../../../../../../context';
import { gql } from 'apollo-server';
import { SectionType } from '../types';

export const list_Sections_TypeDefs = gql`
  type Query {
    Sections_list: [Sections!]!
  }

  type ListMetadata {
    total: Int!
  }

  type Sections {
    id: String!
    published: Boolean!
    title: String!
    title_en: String!
    eventCount: Int!
  }

  enum Order {
    desc
    asc
  }

  enum EventStatus {
    SOON
    ACTIVE
    COMPLETED
  }

  scalar DateTime
`;

export const list_Sections_Query = {
  Sections_list: async (_parent, _args, context: Context) => {
    const data = await context.prisma.section.findMany({
      where: {
        published: true,
      },
    });
    return data;
  },
};

export const list_Sections_Resolver = {
  Sections: {
    eventCount: async (parent: SectionType, _args, context: Context) => {
      return context.prisma.events.count({
        where: { sectionId: parent.id },
      });
    },
  },
};
