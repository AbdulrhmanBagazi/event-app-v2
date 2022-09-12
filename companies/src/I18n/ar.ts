import { TranslationMessages } from 'react-admin'
import arabicMessages from './arabic'

const customArabicMessages: TranslationMessages = {
  ...arabicMessages,
  Users: 'المستخدمين',
  'User Get': 'المستخدم',
  Dashboard: 'لوحة الإحصائيات',
  error: 'حدث خطآ!',
  dashboard: {
    total_users: 'المستخدمين',
  },
  login: {
    required: 'تسجيل الدخول مطلوب!',
    invalid: 'البريد الإلكتروني أو كلمة السر خاطئة',
    sign_in: 'تسجيل الدخول',
    password: 'كلمة المرور',
    email: 'البريد الإلكتروني',
  },
  configuration: {
    configuration: 'الإعدادات',
    theme: 'المظهر',
    language: 'اللغة',
  },
  filters: {
    all: 'الجميع',
    users_filters: {
      email: 'البريد الإلكتروني',
    },
  },
  resources: {
    User: {
      name: 'المستخدمين |||| المستخدم',
      showtabs: {
        summary: 'ملخص',
        posts: 'المنشورات',
        edit: 'تعديل',
      },
      edittabs: {
        ban: 'حظر',
      },
      posts: {
        createdAt: 'تاريخ الإنشاء',
        title: 'العنوان',
      },
      fields: {
        id: 'معرف',
        name: 'الإسم',
        email: 'البريد الإلكتروني',
        verfied: 'تم التحقق',
        suspended: 'محظور',
        createdAt: 'تاريخ الإنشاء',
        postsCount: 'المنشورات',
      },
    },
  },
}

export default customArabicMessages
