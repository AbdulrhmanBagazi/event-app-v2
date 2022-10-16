import { TranslationMessages } from 'react-admin'
import englishMessages from 'ra-language-english'

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  Users: 'Users',
  Companies: 'Companies',
  Events: 'Events',
  Location: 'Locations',
  app_section: 'App Sections',
  evenjob: 'Events Jobs',
  eventshift: 'Events Shifts',
  'User Get': 'User',
  Dashboard: 'Dashboard',
  Dashboarddata: 'Statistics',
  error: 'error!',
  create_job: 'Create Job',
  create_shift: 'Create Shift',
  show_event: 'Show Event',
  PENDING: 'Pending',
  APPROVED: 'Approved',
  DECLINED: 'Declinde',
  CANCELED: 'Canceled',
  COMPLETED: 'Completed',
  WAITLIST: 'Wait-List',
  INTERVIEW: 'Interview-List',
  eventId: 'Event',
  applicants: 'Applicants',
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
          whatsapp: 'Whatsapp',
          phone: 'Contact Number',
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
        location_title: 'Location',
        content_en: 'content',
        image_url: 'image_url',
        location_url: 'location_url',
        status: 'status',
      },
      create: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
        contact: 'Contact Number',
      },
      fields: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        suspended: 'Suspended',
        createdAt: 'Created At',
        logo_url: 'Logo',
        contact: 'Contact Number',
      },
    },
    Event: {
      showtabs: {
        show: 'Informations',
        Events: 'Events',
        edit: 'Edit',
        company: 'Company',
        eventjob: 'Jobs',
        eventshift: 'Shifts',
        details: 'Event Details',
        details_en: 'Event Details (English)',
      },
      edittabs: {
        editinfo: 'Edit informations',
        editdetails: 'Edit details',
        editdetails_en: 'Edit details (English)',
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
        location_title: 'Location',
        image_url: 'image_url',
        location_url: 'location_url',
        status: 'status',
        SelectCompany: 'Select Company',
        locationId: 'Location Id',
        location: 'Location',
        app_sectionId: 'App section',
        details: 'Event Details',
        details_en: 'Event Details (English)',
        detailstitle: 'Title',
        detailscontent: 'Content',
        company: {
          name: 'Company',
        },
      },
      status: {
        soon: 'soon',
        active: 'active',
        completed: 'completed',
      },
    },

    Location: {
      name: 'Locations |||| Location',
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
        title_en: 'title (en)',
      },
      edittabs: {
        edit: 'Edit',
      },
    },
    app_section: {
      name: 'App Sections |||| App Section',
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
        company: {
          name: 'Company',
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
    eventshift: {
      name: 'Events Shifts |||| Shift',
      showtabs: {
        show: 'Details',
        edit: 'Edit',
      },
      fields: {
        id: 'id',
        createdAt: 'created At',
        updatedAt: 'updated At',
        start_time: 'Work Starts',
        end_time: 'Work Ends',
        rate: 'salary/SAR',
        rate_type: 'salary type',
        status: 'status',
        eventId: 'event',
        Event: {
          title: 'Event',
          title_en: 'Event',
        },
        company: {
          name: 'Company',
        },
        contact: {
          phone: 'Phone',
          whatsapp: 'Whatsapp',
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
    applicants: {
      name: 'Events Applicants |||| Applicant',
      showtabs: {
        show: 'Details',
        edit: 'Edit',
      },
      fields: {
        id: 'id',
        createdAt: 'created At',
        updatedAt: 'updated At',
        //
        name: 'Name',
        nationality: 'nationality',
        nationalID: 'national/iqama ID',
        dateOfBirth: 'Date Of Birth',
        age: 'Age',
        null: 'User did not add profile informations',
        gender: 'Gender',
        whatsapp: 'Whatsapp',
        phone: 'Contact Number',
        //
        shift: 'Shift',
        job: 'Job',
        //
        status: 'Status',
        eventId: 'Event',
        companyId: 'Company',
        event: {
          title: 'Event',
          title_en: 'Event',
        },
        company: {
          name: 'Company',
        },
        contact: {
          whatsapp: 'Whatsapp',
          phone: 'Contact Number',
        },
      },
      edittabs: {
        edit: 'Edit',
      },
    },
  },
}

export default customEnglishMessages
