import {Component} from 'react';
import {Events} from './graphql/generated';

type ParamList = {
  Events: {
    params: {app_sectionId: string; title: string};
  };
  Event: {
    params: Events;
  };
};

export type RootStackParamList = {
  Main: undefined;
  Signin: undefined;
  Signup: undefined;
  UserProfile: undefined;
  Earnings: undefined;
  ChangePassword: undefined;
  Contact: undefined;
  All_Events: {
    params: {
      app_sectionId: string;
      title: string;
    };
  };
  Event: {
    params: Events;
  };
  Language: undefined;
};

//routes.tsx
export type RoutesType = {
  name: string;
  component: React.Element<Component>;
};

//I18n.context.tsx
type Languges = 'ar' | 'en';

export type I18nContextType = {
  ToggleI18n: (lang: Languges, firstTime: boolean) => void;
  Locals: array;
  Lang: string;
};

//themeToggle.context.tsx
interface ColorsType {
  OnBackground: string;
  Background: string;
  Error: string;
  onError: string;
  Primary: string;
  OnPrimary: string;
  Surface: string;
  OnSurface: string;
  Secondary: string;
  OnSecondary: string;
  disabled: strig;
}

type Theme = {
  dark: ColorsType;
  light: ColorsType;
};

export type ThemeContextType = {
  ToggleTheme: () => void;
  isDarkMode: boolean;
  Colors: ColorsType;
  Theme: Theme;
};

//Notification Context
export interface DeviceState {
  userId: string;
  pushToken: string;
  emailUserId: string;
  emailAddress: string;
  smsUserId: string;
  smsNumber: string;
  isSubscribed: boolean;
  isPushDisabled: boolean;
  isEmailSubscribed: boolean;
  isSMSSubscribed: boolean;
  hasNotificationPermission?: boolean;
  notificationPermissionStatus?: IosPermissionStatus;
}

export type NotificationContextType = {
  ToggleNotification: () => void;
  Notification: DeviceState | null;
  notificationLoading: boolean;
};

//api
interface UserProfileType {
  id: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  userId: string;
  firstName: string;
  lastName: string;
  nationality: CountryCode;
  nationalID: string;
  dateOfBirth: Date | undefined;
  gender: string;
  whatsapp: string;
  phone: string;
}

export type UserTypes = {
  email: string;
  verfied: boolean;
  Type: string;
  Profile: UserProfileType | null | undefined;
};

interface user {
  user: UserTypes;
}

export type QueryResponse = [
  error: {data: Array<any> | object | string; status: number} | null,
  data: user | any,
];

//Auth context

export type AuthReturn = [
  error: {data: Array<any> | object | string; status: number} | null,
  data: UserTypes | null,
];

export type AuthenticatedTypes = {
  isAuthenticated: boolean;
  user: UserTypes | null;
  verfied: boolean | null;
  authLoading: boolean;
  GraphQlLoading: boolean;
  UpdateLoading: (arg0: boolean) => void;
  SignOut: () => void;
  SignIn: (arg0: SignInTypes) => AuthReturn;
  SignUp: (arg0: SignInTypes) => AuthReturn;
  GoogleSignIn: (arg0: GoogleArgs) => AuthReturn;
  AppleSignIn: (arg0: AppleArgs) => AuthReturn;
  Unauthorized: () => void;
  Verified: () => void;
  Authenticate: () => void;
  AddProfile: (arg0: UserProfileType) => void;
};

export type UpdateUserTypes = {
  email: string;
  verfied: boolean;
  Type: string;
  Profile: UserProfileType;
};

export type UserUpdateTypes = {
  user: UpdateUserTypes;
  GraphQlLoading: boolean;
  UpdateLoading: (arg0: boolean) => void;
  AddProfile: (arg0: UserProfileType) => void;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: UserTypes | null;
  verfied: boolean | null;
  authLoading: boolean;
  GraphQlLoading: boolean;
  UpdateLoading: (arg0: boolean) => void;
  SignOut: () => void;
  SignIn: (arg0: SignInTypes) => void;
  SignUp: (arg0: SignInTypes) => void;
  GoogleSignIn: (arg0: GoogleArgs) => void;
  AppleSignIn: (arg0: AppleArgs) => void;
  Unauthorized: () => void;
  Verified: () => void;
  Authenticate: () => void;
  AddProfile: (arg0: UserProfileType) => void;
};

export type AppleArgs = {
  user: String;
  email: String | null;
  nonce: String;
  identityToken: String;
  realUserStatus: number;
};

export type GoogleArgs = {
  user: {
    id: string;
    name: string | null;
    email: string;
    photo: string | null;
    familyName: string | null;
    givenName: string | null;
  };
  scopes?: string[];
  idToken: string | null;
  /**
   * Not null only if a valid webClientId and offlineAccess: true was
   * specified in configure().
   */
  serverAuthCode: string | null;
};

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  email: string;
  password: string;
};

//Error Context
export type ErrorContextType = {
  ThrowError: (msg: string) => void;
};

//Country picker

export const CountryCodeList = [
  'AF',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'BE',
  'BZ',
  'BJ',
  'BM',
  'BT',
  'BO',
  'BA',
  'BW',
  'BV',
  'BR',
  'IO',
  'VG',
  'BN',
  'BG',
  'BF',
  'BI',
  'KH',
  'CM',
  'CA',
  'CV',
  'BQ',
  'KY',
  'CF',
  'TD',
  'CL',
  'CN',
  'CX',
  'CC',
  'CO',
  'KM',
  'CK',
  'CR',
  'HR',
  'CU',
  'CW',
  'CY',
  'CZ',
  'CD',
  'DK',
  'DJ',
  'DM',
  'DO',
  'EC',
  'EG',
  'SV',
  'GQ',
  'ER',
  'EE',
  'SZ',
  'ET',
  'FK',
  'FO',
  'FJ',
  'FI',
  'FR',
  'GF',
  'PF',
  'TF',
  'GA',
  'GM',
  'GE',
  'DE',
  'GH',
  'GI',
  'GR',
  'GL',
  'GD',
  'GP',
  'GU',
  'GT',
  'GG',
  'GN',
  'GW',
  'GY',
  'HT',
  'HM',
  'HN',
  'HU',
  'IS',
  'IN',
  'ID',
  'IR',
  'IQ',
  'IE',
  'IM',
  'IL',
  'IT',
  'CI',
  'JM',
  'JP',
  'JE',
  'JO',
  'KZ',
  'KE',
  'XK',
  'KW',
  'KG',
  'LA',
  'LV',
  'LB',
  'LS',
  'LR',
  'LY',
  'LI',
  'LT',
  'LU',
  'MO',
  'MK',
  'MG',
  'MW',
  'MY',
  'MV',
  'ML',
  'MT',
  'MH',
  'MQ',
  'MR',
  'MU',
  'YT',
  'MX',
  'FM',
  'MD',
  'MC',
  'MN',
  'ME',
  'MS',
  'MA',
  'MZ',
  'MM',
  'NA',
  'NR',
  'NP',
  'NL',
  'NC',
  'NZ',
  'NI',
  'NE',
  'NG',
  'NU',
  'NF',
  'KP',
  'MP',
  'NO',
  'OM',
  'PK',
  'PW',
  'PS',
  'PA',
  'PG',
  'PY',
  'PE',
  'PH',
  'PN',
  'PL',
  'PT',
  'PR',
  'QA',
  'CG',
  'RO',
  'RU',
  'RW',
  'RE',
  'BL',
  'SH',
  'KN',
  'LC',
  'MF',
  'PM',
  'VC',
  'WS',
  'SM',
  'SA',
  'SN',
  'RS',
  'SC',
  'SL',
  'SG',
  'SX',
  'SK',
  'SI',
  'SB',
  'SO',
  'ZA',
  'GS',
  'KR',
  'SS',
  'ES',
  'LK',
  'SD',
  'SR',
  'SJ',
  'SE',
  'CH',
  'SY',
  'ST',
  'TW',
  'TJ',
  'TZ',
  'TH',
  'TL',
  'TG',
  'TK',
  'TO',
  'TT',
  'TN',
  'TR',
  'TM',
  'TC',
  'TV',
  'UG',
  'UA',
  'AE',
  'GB',
  'US',
  'UM',
  'VI',
  'UY',
  'UZ',
  'VU',
  'VA',
  'VE',
  'VN',
  'WF',
  'EH',
  'YE',
  'ZM',
  'ZW',
  'KI',
  'HK',
  'AX',
] as const;

export type CountryCode = typeof CountryCodeList[number];

export type CallingCode = string;

export type CurrencyCode = string;

export type TranslationLanguageCodeMap = {
  [key in TranslationLanguageCode]: string;
};
export interface Country {
  region: Region;
  subregion: Subregion;
  currency: CurrencyCode[];
  callingCode: CallingCode[];
  flag: string;
  name: TranslationLanguageCodeMap | string;
  cca2: CountryCode;
}
export const RegionList = [
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
] as const;
export type Region = typeof RegionList[number];

export const SubregionList = [
  'Southern Asia',
  'Southern Europe',
  'Northern Africa',
  'Polynesia',
  'Middle Africa',
  'Caribbean',
  'South America',
  'Western Asia',
  'Australia and New Zealand',
  'Western Europe',
  'Eastern Europe',
  'Central America',
  'Western Africa',
  'North America',
  'Southern Africa',
  'Eastern Africa',
  'South-Eastern Asia',
  'Eastern Asia',
  'Northern Europe',
  'Melanesia',
  'Micronesia',
  'Central Asia',
  'Central Europe',
] as const;
export type Subregion = typeof SubregionList[number];

export const TranslationLanguageCodeList = [
  'ar',
  'en',
  'cym',
  'deu',
  'fra',
  'hrv',
  'ita',
  'jpn',
  'nld',
  'por',
  'rus',
  'spa',
  'svk',
  'fin',
  'zho',
  'isr',
] as const;
export type TranslationLanguageCode =
  typeof TranslationLanguageCodeList[number];

export enum FlagType {
  FLAT = 'flat',
  EMOJI = 'emoji',
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// type guards
export function isCountryCode(str: string): str is CountryCode {
  return CountryCodeList.some(code => code === str);
}

//
