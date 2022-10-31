import { TranslationMessages } from 'react-admin'
import arabicMessages from './arabic'

const customArabicMessages: TranslationMessages = {
  ...arabicMessages,
  Events: 'الفعاليات',
  'User Get': 'المستخدم',
  Dashboard: 'لوحة الإحصائيات',
  error: 'حدث خطآ!',
  eventjob: 'وظائف الفعاليات',
  'Email exists': 'البريد الإلكتروني مستخدم',
  create: 'إنشاء',
  create_job: 'إنشاء وظيفة',
  eventshift: 'ورديات الفعاليات',
  create_shift: 'إنشاء وردية',
  show_applicants: 'عرض المتقدمين للوظيفة',
  show_event: 'عرض الفعالية',
  yes: 'نعم',
  no: 'لا',
  PENDING: 'قيد الإنتظار',
  APPROVED: 'معتمد',
  DECLINED: 'مرفوض',
  CANCELED: 'ملغي',
  COMPLETED: 'مكتمل',
  WAITLIST: 'قائمة الإنتظار',
  INTERVIEW: 'قائمة المقابلة الشخصية',
  INACTIVE: 'غير نشط',
  applicants: 'طلبات العمل',
  eventday: 'سجلات التحضير',
  create_eventday: 'إنشاء آيام',
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
        details_en: 'تفاصيل الفعالية (إنجليزي)',
        show: 'التفاصيل',
        posts: 'المنشورات',
        edit: 'تعديل',
        company: 'الشركة',
        eventjob: 'الوظائف',
        eventshift: 'الورديات',
        eventdays: 'سجلات التحضير',
      },
      edittabs: {
        editinfo: 'تعديل المعلومات',
        editdetails: 'تعديل التفاصيل',
        editdetails_en: 'تعديل التفاصيل (إنجليزي)',
        editdays: 'تعديل آيام الفعالية',
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
        eventcalendar: 'آيام الفعالية',
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
        title: 'الوظيفة',
        title_en: 'الوظيفة (إنجليزي)',
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
    eventshift: {
      name: 'ورديات الفعاليات |||| وردية',
      showtabs: {
        show: 'التفاصيل',
        edit: 'تعديل',
      },
      fields: {
        id: 'معرف',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        start_time: 'بدء العمل',
        end_time: 'إنتهاء العمل',
        status: 'الحالة',
        eventId: 'الفعالية',
        companyId: 'الشركة',
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
      filters: {
        events: 'الفعالية',
      },
    },
    applicants: {
      name: 'طلبات العمل |||| تفاصيل الطلب',
      showtabs: {
        show: 'التفاصيل',
        edit: 'تعديل',
        update_status: 'تحديث الحالة',
      },
      fields: {
        id: 'معرف',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        //
        name: 'الإسم',
        nationality: 'الجنسية',
        nationalID: 'رقم الهوية',
        dateOfBirth: 'تاريخ الميلاد',
        age: 'العمر',
        gender: 'الجنس',
        whatsapp: 'واتس اب',
        phone: 'رقم التواصل',
        //
        shift: 'الوردية',
        job: 'الوظيفة',
        //
        status: 'الحالة',
        eventId: 'الفعالية',
        companyId: 'الشركة',
        event: {
          title: 'الفعالية',
          title_en: 'الفعالية',
        },
        company: {
          name: 'الشركة',
        },
        contact: {
          phone: 'رقم الجوال',
          whatsapp: 'واتساب',
        },
      },
      edittabs: {
        edit: 'تعديل',
      },
    },
  },
}

export default customArabicMessages
