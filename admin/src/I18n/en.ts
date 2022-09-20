import { TranslationMessages } from 'react-admin'
import englishMessages from 'ra-language-english'

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  Users: 'Users',
  Companies: 'Companies',
  Events: 'Events',
  Section: 'Sections',
  'User Get': 'User',
  Dashboard: 'Dashboard',
  error: 'error!',
  dashboard: {
    total_users: 'Users',
  },
  login: {
    required: 'login required!',
    invalid: 'Invalid email or password',
    sign_in: 'Sign in',
    password: 'Password',
    email: 'Email',
  },
  configuration: {
    configuration: 'configuration',
    theme: 'theme',
    language: 'Language',
  },
  filters: {
    all: 'all',
    users_filters: {
      email: 'Email',
    },
  },
  resources: {
    User: {
      showtabs: {
        summary: 'Summary',
        posts: 'Posts',
        edit: 'Edit',
        profile: 'Profile',
      },
      edittabs: {
        ban: 'Ban',
      },
      posts: {
        createdAt: 'Created At',
        title: 'Title',
      },
      fields: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        verfied: 'Verfied',
        suspended: 'Suspended',
        createdAt: 'Created At',
        // postsCount: 'Posts',
        Type: 'Type',
        Profile: {
          firstName: 'FirstName',
          lastName: 'Last Name',
          nationality: 'nationality',
          nationalID: 'national/iqama ID',
          dateOfBirth: 'Date Of Birth',
          createdAt: 'Created At',
          null: 'User did not add profile informations',
        },
      },
    },
    Companies: {
      showtabs: {
        summary: 'Summary',
        Events: 'Events',
        edit: 'Edit',
      },
      edittabs: {
        ban: 'Ban',
      },
      Events: {
        id: 'ID',
        published: 'published',
        createdAt: 'created At',
        updatedAt: 'updated At',
        companyId: 'company Id',
        title: 'title',
        content: 'content',
        title_en: 'title_en',
        content_en: 'content_en',
        image_url: 'image_url',
        location_url: 'location_url',
        status: 'status',
      },
      create: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
      },
      fields: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        suspended: 'Suspended',
        createdAt: 'Created At',
        logo_url: 'Logo URL',
      },
    },
    Event: {
      showtabs: {
        summary: 'Summary',
        Events: 'Events',
        edit: 'Edit',
        company: 'Company',
      },
      edittabs: {
        publish: 'publish',
      },
      fields: {
        id: 'ID',
        published: 'published',
        createdAt: 'created At',
        updatedAt: 'updated At',
        companyId: 'company Id',
        title: 'title',
        content: 'content',
        title_en: 'title_en',
        content_en: 'content_en',
        image_url: 'image_url',
        location_url: 'location_url',
        status: 'status',
        SelectCompany: 'Select Company',
        sectionId: 'section Id',
      },
      status: {
        soon: 'soon',
        active: 'active',
        completed: 'completed',
      },
    },

    Section: {
      name: 'Sections |||| Section',
      showtabs: {
        summary: 'Summary',
        edit: 'Edit',
      },
      fields: {
        id: 'id',
        published: 'published',
        createdAt: 'created At',
        updatedAt: 'updated At',
        title: 'title',
        title_en: 'title_en',
      },
      edittabs: {
        publish: 'publish',
      },
    },
  },
}

export default customEnglishMessages
