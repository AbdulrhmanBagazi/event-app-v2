import {StackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

//Screens
export type ScreenType = {
  i18n?: array;
  navigation?: StackScreenProps;
};

//routes.tsx
export type RoutesType = {
  name: string;
  component: React.Element;
};

//I18n.context.tsx
type Languges = 'ar' | 'en';

export type I18nContextType = {
  ToggleI18n: (lang: Languges) => void;
  Locals: array;
  Lang: string;
};

//themeToggle.context.tsx
interface ColorsType {
  OnBackground: string;
  Background: string;
  Error: string;
  onError: string;
  PrimaryOnBackground: string;
  Primary: string;
  OnPrimary: string;
  Surface: string;
  OnSurface: string;
  Secondary: string;
  OnSecondary: string;
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
export type UserTypes = {
  id: string;
  email: string;
  verfied: boolean;
  Type: string;
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
  SignOut: () => void;
  SignIn: (arg0: SignInTypes) => AuthReturn;
  SignUp: (arg0: SignInTypes) => AuthReturn;
  GoogleSignIn: (arg0: GoogleArgs) => AuthReturn;
  AppleSignIn: (arg0: AppleArgs) => AuthReturn;
  Unauthorized: () => void;
  Verified: () => void;
  Authenticate: () => void;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: UserTypes | null;
  verfied: boolean | null;
  authLoading: boolean;
  SignOut: () => void;
  SignIn: (arg0: SignInTypes) => void;
  SignUp: (arg0: SignInTypes) => void;
  GoogleSignIn: (arg0: GoogleArgs) => void;
  AppleSignIn: (arg0: AppleArgs) => void;
  Unauthorized: () => void;
  Verified: () => void;
  Authenticate: () => void;
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
