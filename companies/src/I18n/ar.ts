import { TranslationMessages } from 'react-admin'
import arabicMessages from './arabic'

const customArabicMessages: TranslationMessages = {
  ...arabicMessages,
  Events: 'الفعاليات',
  'User Get': 'المستخدم',
  Dashboard: 'لوحة الإحصائيات',
  error: 'حدث خطآ!',
  evenjob: 'وظائف الفعاليات',
  'Email exists': 'البريد الإلكتروني مستخدم',
  create: 'إنشاء',
  create_job: 'إنشاء وظيفة',
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
        details: 'تفاصيل الفعالية',
        show: 'التفاصيل',
        posts: 'المنشورات',
        edit: 'تعديل',
        company: 'الشركة',
        eventjob: 'الوظائف',
      },
      edittabs: {
        editinfo: 'تعديل المعلومات',
        editdetails: 'تعديل التفاصيل',
      },
      fields: {
        id: 'معرف',
        published: 'النشر',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        companyId: 'معرف الشركة',
        title: 'العنوان',
        content: 'المحتوى',
        title_en: 'العنوان (إنجليزي)',
        content_en: 'المحتوى (إنجليزي)',
        location_title: 'الموقع',
        image_url: 'رابط الصورة',
        location_url: 'رابط الموقع',
        status: 'الحالة',
        SelectCompany: 'قم بإختيار الشركة',
        locationId: 'معرف الموقع',
        location: 'الموقع',
        app_sectionId: 'القسم في التطبيق',
        details: 'تفاصيل الفعالية',
        details_en: 'تفاصيل الفعالية (إنجليزي)',
        detailstitle: 'العنوان',
        detailscontent: 'المحتوى',
      },
      status: {
        soon: 'قريبا',
        active: 'نشط',
        completed: 'مكتمل',
      },
    },
    eventjob: {
      name: 'وظائف الفعاليات |||| وظيفة',
      showtabs: {
        show: 'التفاصيل',
        edit: 'تعديل',
      },
      fields: {
        id: 'معرف',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        title: 'الإسم',
        title_en: 'الإسم (إنجليزي)',
        rate: 'الراتب/ريال سعودي',
        rate_type: 'نوع الراتب',
        status: 'الحالة',
        eventId: 'الفعالية',
        Event: {
          title: 'الفعالية',
          title_en: 'الفعالية',
        },
      },
      edittabs: {
        edit: 'تعديل',
      },
      status: {
        OPEN: 'مفتوح',
        CLOSED: 'مغلق',
      },
      rate_type: {
        MONTHLY: 'شهري',
        DAY: 'يومي',
      },
    },
  },
}

export default customArabicMessages
