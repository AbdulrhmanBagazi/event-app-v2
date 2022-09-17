import { TranslationMessages } from 'react-admin'
import arabicMessages from './arabic'

const customArabicMessages: TranslationMessages = {
  ...arabicMessages,
  Users: 'المستخدمين',
  Companies: 'الشركات',
  Events: 'الفعاليات',
  Section: 'الآقسام',
  'User Get': 'المستخدم',
  Dashboard: 'لوحة الإحصائيات',
  error: 'حدث خطآ!',
  'Email exists': 'البريد الإلكتروني مستخدم',
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
      fields: {
        id: 'معرف',
        name: 'الإسم',
        email: 'البريد الإلكتروني',
        verfied: 'تم التحقق',
        suspended: 'حظر',
        createdAt: 'تاريخ الإنشاء',
        // postsCount: 'المنشورات',
        Type: 'الحساب',
      },
    },
    Companies: {
      name: 'الشركات |||| الشركة',
      showtabs: {
        summary: 'ملخص',
        Events: 'الفعاليات',
        edit: 'تعديل',
      },
      edittabs: {
        ban: 'حظر',
      },
      Events: {
        id: 'معرف',
        published: 'نشر',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        companyId: 'معرف الشركة',
        title: 'العنوان',
        content: 'المحتوى',
        title_en: 'العنوان (إنجليزي)',
        content_en: 'المحتوى (إنجليزي)',
        image_url: 'رابط الصورة',
        location_url: 'رابط الموقع',
        status: 'الحالة',
      },
      create: {
        name: 'الإسم',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
      },
      fields: {
        id: 'معرف',
        name: 'الإسم',
        email: 'البريد الإلكتروني',
        createdAt: 'تاريخ الإنشاء',
        suspended: 'حظر',
        logo_url: 'رابط الشعار',
      },
    },
    Event: {
      name: 'الفعاليات |||| الفعالية',
      showtabs: {
        summary: 'ملخص',
        posts: 'المنشورات',
        edit: 'تعديل',
        company: 'الشركة',
      },
      edittabs: {
        publish: 'نشر',
      },
      fields: {
        id: 'معرف',
        published: 'نشر',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        companyId: 'معرف الشركة',
        title: 'العنوان',
        content: 'المحتوى',
        title_en: 'العنوان (إنجليزي)',
        content_en: 'المحتوى (إنجليزي)',
        image_url: 'رابط الصورة',
        location_url: 'رابط الموقع',
        status: 'الحالة',
        SelectCompany: 'قم بإختيار الشركة',
        sectionId: 'معرف القسم',
      },
      status: {
        soon: 'قريبا',
        active: 'نشط',
        completed: 'مكتمل',
      },
    },
    Section: {
      name: 'الآقسام |||| قسم',
      showtabs: {
        summary: 'ملخص',
        edit: 'تعديل',
      },
      fields: {
        id: 'معرف',
        published: 'نشر',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        title: 'العنوان',
        title_en: 'العنوان (إنجليزي)',
      },
      edittabs: {
        publish: 'نشر',
      },
    },
  },
}

export default customArabicMessages
