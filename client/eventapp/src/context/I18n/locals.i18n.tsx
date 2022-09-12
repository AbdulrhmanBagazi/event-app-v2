// import {I18nManager} from 'react-native';

const I18n_ar = {
  NavigationButton: {
    AuthStack: 'تسجيل الدخول',
    Signin: 'تسجيل الدخول',
    Signup: 'إنشاء حساب',
  },
  Tabs: {
    Main: 'الرئيسية',
    Auth: 'تسجيل الدخول',
  },
  Home: {
    Title: 'الرئيسية',
    Welcome: 'مرحبا ',
    Error: 'قم بتسجيل الدخول!',
  },
  Auth: {
    Title: '',
    Welcome: 'مرحبا',
    Connect: 'المتابعة بإستخدام',
    Google: 'المتابعة بإستخدام Google',
    Apple: 'المتابعة بإستخدام Apple',
  },
  Signin: {
    Title: 'تسجيل الدخول',
    Email: 'البريد الإلكتروني',
    Password: 'كلمة المرور',
  },
  Signup: {
    Title: 'إنشاء حساب',
    Email: 'البريد الإلكتروني',
    Password: 'كلمة المرور',
  },
  Settings: {
    Title: 'الإعدادات',
    DarkMode: 'داكن',
    Theme: 'المظهر',
    Language: 'اللغة',
    Notification: 'الإشعارات',
    Push: 'إشعارات لحظية',
    AllowNotifications: 'تمكين الإشعارات اللحظية',
    AllowNotificationsMSG:
      'يمكن تمكين الإشعارات اللحظية من الإعدادات العامة على جهازك.',
    LanguageChange: 'سيتم إعادة تشغيل التطبيق',
    ok: 'موافق',
    cancel: 'إلغاء',
    yes: 'نعم',
    no: 'لا',
  },
  Profile: {
    Title: 'الملف الشخصي',
  },
  SignOutButton: {
    Title: 'تسجيل الخروج',
    dialog: 'تآكيد',
    dialogmsg: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
  },
  Errors: {
    SignIn: 'البريد الإلكتروني أو كلمة مرور غير صحيحة.',
    EmailUsed: 'البريد الالكتروني مستخدم',
    unknown: 'حدث خطأ',
  },
};

const I18n_en = {
  NavigationButton: {
    AuthStack: 'SignIn',
    Signin: 'SignIn',
    Signup: 'SignUp',
  },
  Tabs: {
    Main: 'Home',
    Auth: 'SignIn',
  },
  Home: {
    Title: 'Home',
    Welcome: 'welcome ',
    Error: 'Sign in first!',
  },
  Auth: {
    Title: '',
    Welcome: 'Welcome',
    Connect: 'Connect with',
    Google: 'Sign in with Google',
    Apple: 'Sign in with Apple',
  },
  Signin: {
    Title: 'SignIn',
    Email: 'Email',
    Password: 'Password',
  },
  Signup: {
    Title: 'SignUp',
    Email: 'Email',
    Password: 'Password',
  },
  Settings: {
    Title: 'Settings',
    DarkMode: 'Dark mode',
    Theme: 'Theme',
    Language: 'Language',
    Notification: 'Notification',
    Push: 'Push Notification',
    AllowNotifications: 'Enable Push Notifications?',
    AllowNotificationsMSG:
      'Push notifications can be enabled from General Settings on your Device.',
    LanguageChange: 'App will restart',
    ok: 'ok',
    cancel: 'cancel',
    yes: 'yes',
    no: 'no',
  },
  Profile: {
    Title: 'Profile',
  },
  SignOutButton: {
    Title: 'SignOut',
    dialog: 'Confirm',
    dialogmsg: 'are you sure you want to SignOut?',
  },
  Errors: {
    SignIn: 'Incorrect email or password.',
    EmailUsed: 'Email already exists',
    unknown: 'An error occurred',
  },
};

export {I18n_ar, I18n_en};
