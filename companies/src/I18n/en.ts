import { TranslationMessages } from 'react-admin'
import englishMessages from 'ra-language-english'

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  Users: 'Users',
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
        postsCount: 'Posts',
      },
    },
  },
}

export default customEnglishMessages
