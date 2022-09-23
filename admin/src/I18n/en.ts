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
        show: 'Details',
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
          age: 'Age',
          createdAt: 'Created At',
          null: 'User did not add profile informations',
          gender: 'Gender',
        },
      },
    },
    Companies: {
      showtabs: {
        show: 'Details',
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
        title_en: 'title',
        section_title: 'Section ',
        content_en: 'content',
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
        show: 'Details',
        Events: 'Events',
        edit: 'Edit',
        company: 'Company',
      },
      edittabs: {
        edit: 'Edit',
      },
      fields: {
        id: 'ID',
        published: 'published',
        createdAt: 'created At',
        updatedAt: 'updated At',
        companyId: 'company Id',
        title: 'title',
        content: 'content',
        title_en: 'title',
        content_en: 'content',
        section_title: 'Section ',
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
        show: 'Details',
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
        edit: 'Edit',
      },
    },
  },
}

export default customEnglishMessages
