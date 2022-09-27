import { TranslationMessages } from 'react-admin'
import arabicMessages from './arabic'

const customArabicMessages: TranslationMessages = {
  ...arabicMessages,
  Users: 'المستخدمين',
  Companies: 'الشركات',
  Events: 'الفعاليات',
  Location: 'المواقع',
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
        show: 'التفاصيل',
        posts: 'المنشورات',
        edit: 'تعديل',
        profile: 'الملف الشخصي',
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
        Profile: {
          firstName: 'الإسم الآول',
          lastName: 'الإسم الآخير',
          nationality: 'الجنسية',
          nationalID: 'رقم الهوية',
          dateOfBirth: 'تاريخ الميلاد',
          age: 'العمر',
          createdAt: 'تاريخ الإنشاء',
          gender: 'الجنس',
          null: 'لم يتم إضافة بيانات الملف الشخصي من قبل المستخدم',
          whatsapp: 'واتس اب',
          phone: 'رقم التواصل',
        },
      },
    },
    Companies: {
      name: 'الشركات |||| الشركة',
      showtabs: {
        show: 'التفاصيل',
        Events: 'الفعاليات',
        edit: 'تعديل',
      },
      edittabs: {
        ban: 'حظر',
      },
      Events: {
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
      },
      create: {
        name: 'الإسم',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        contact: 'رقم التواصل',
      },
      fields: {
        id: 'معرف',
        name: 'الإسم',
        email: 'البريد الإلكتروني',
        createdAt: 'تاريخ الإنشاء',
        suspended: 'حظر',
        logo_url: 'الشعار',
        contact: 'رقم التواصل',
      },
    },
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
        locationId: 'معرف القسم',
      },
      status: {
        soon: 'قريبا',
        active: 'نشط',
        completed: 'مكتمل',
      },
    },
    Location: {
      name: 'المواقع |||| الموقع',
      showtabs: {
        show: 'التفاصيل',
        edit: 'تعديل',
      },
      fields: {
        id: 'معرف',
        published: 'النشر',
        createdAt: 'تاريخ الإنشاء',
        updatedAt: 'تاريخ التحديث',
        title: 'العنوان',
        title_en: 'العنوان (إنجليزي)',
      },
      edittabs: {
        edit: 'تعديل',
      },
    },
  },
}

export default customArabicMessages
