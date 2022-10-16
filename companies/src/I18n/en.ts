import { TranslationMessages } from 'react-admin'
import englishMessages from 'ra-language-english'

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  Events: 'Events',
  Dashboard: 'Dashboard',
  error: 'error!',
  eventjob: 'Events Jobs',
  eventshift: 'Events Shifts',
  create: 'Create',
  create_job: 'Create Job',
  create_shift: 'Create Shift',
  show_event: 'Show Event',
  yes: 'yes',
  no: 'no',
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
    Event: {
      showtabs: {
        show: 'Details',
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
      },
      status: {
        soon: 'soon',
        active: 'active',
        completed: 'completed',
      },
    },
    eventjob: {
      name: 'Job|||| Events Jobs',
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
    eventshift: {
      name: 'Shift |||| Events Shifts ',
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
      filters: {
        events: 'Events',
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
