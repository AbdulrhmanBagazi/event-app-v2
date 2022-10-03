import { TranslationMessages } from 'react-admin'
import englishMessages from 'ra-language-english'

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  Events: 'Events',
  Dashboard: 'Dashboard',
  error: 'error!',
  evenjob: 'Events Jobs',
  create: 'Create',
  create_job: 'Create Job',
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
    Event: {
      showtabs: {
        show: 'Details',
        Events: 'Events',
        edit: 'Edit',
        company: 'Company',
        eventjob: 'Jobs',
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
        title_en: 'title_en',
        content_en: 'content_en',
        location_title: 'Location ',
        image_url: 'image_url',
        location_url: 'location_url',
        status: 'status',
        SelectCompany: 'Select Company',
        location: 'Location',
        locationId: 'Location id',
      },
      status: {
        soon: 'soon',
        active: 'active',
        completed: 'completed',
      },
    },
    evenjob: {
      name: 'Events Jobs |||| Job',
      showtabs: {
        show: 'Details',
        edit: 'Edit',
      },
      fields: {
        id: 'id',
        createdAt: 'created At',
        updatedAt: 'updated At',
        title: 'title',
        title_en: 'title (en)',
        rate: 'salary/SAR',
        rate_type: 'salary type',
        status: 'status',
        eventId: 'event',
        Event: {
          title: 'Event',
          title_en: 'Event',
        },
      },
      edittabs: {
        edit: 'Edit',
      },
      status: {
        OPEN: 'Open',
        CLOSED: 'Closed',
      },
      rate_type: {
        MONTHLY: 'MONTHLY',
        DAY: 'Day',
      },
    },
  },
}

export default customEnglishMessages
