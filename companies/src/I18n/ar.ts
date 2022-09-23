import { TranslationMessages } from 'react-admin'
import arabicMessages from './arabic'

const customArabicMessages: TranslationMessages = {
  ...arabicMessages,
  Events: 'الفعاليات',
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
    Event: {
      name: 'الفعاليات |||| الفعالية',
      showtabs: {
        show: 'التفاصيل',
        posts: 'المنشورات',
        edit: 'تعديل',
        company: 'الشركة',
      },
      edittabs: {
        edit: 'تعديل',
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
        section_title: 'القسم',
        image_url: 'رابط الصورة',
        location_url: 'رابط الموقع',
        status: 'الحالة',
        SelectCompany: 'قم بإختيار الشركة',
        section: 'القسم',
        sectionId: 'القسم',
        sectionstatus: 'القسم (النشر)',
      },
      status: {
        soon: 'قريبا',
        active: 'نشط',
        completed: 'مكتمل',
      },
    },
  },
}

export default customArabicMessages
