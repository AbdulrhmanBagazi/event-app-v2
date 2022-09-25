import React, {
  createContext,
  useState,
  useContext,
  // useEffect,
  ReactElement,
} from 'react';
import {fetcher, poster} from '../../api/auth.api';
import {
  AppleArgs,
  AuthContextType,
  AuthReturn,
  GoogleArgs,
  SignInTypes,
  SignUpTypes,
  UserProfileType,
  UserTypes,
} from '../../typs';
import RNBootSplash from 'react-native-bootsplash';
import OneSignal from 'react-native-onesignal';
import {Platform} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  authLoading: true,
  verfied: null,
  SignOut: () => {},
  SignIn: () => {},
  SignUp: () => {},
  Unauthorized: () => {},
  Verified: () => {},
  GoogleSignIn: () => {},
  Authenticate: () => {},
  AppleSignIn: () => {},
  AddProfile: () => {},
  GraphQlLoading: false,
  UpdateLoading: () => {},
});

export const AuthProvider = ({
  children,
}: {
  children: ReactElement;
}): JSX.Element => {
  const [user, setUser] = useState<UserTypes | null>(null);
  const [verfied, setVerfied] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);
  const [loadingGraphql, setLoadingGraphql] = useState(false);

  const Authenticate = async () => {
    setLoading(true);
    const [error, data] = await fetcher('/authentication');

    RNBootSplash.hide({fade: true});

    if (error && !data) {
      // addError(error)
      setAuth(false);
      setLoading(false);

      setTimeout(() => {
        // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
        // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 7)
        if (Platform.OS === 'ios') {
          OneSignal.promptForPushNotificationsWithUserResponse(response => {
            if (!response) {
              OneSignal.disablePush(true);
            }
          });
        }
      }, 1000);
      return;
    }

    setVerfied(data?.user?.verfied);
    setUser(data?.user);
    setAuth(true);
    setLoading(false);

    setTimeout(() => {
      // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
      // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 7)
      if (Platform.OS === 'ios') {
        OneSignal.promptForPushNotificationsWithUserResponse(response => {
          if (!response) {
            OneSignal.disablePush(true);
          }
        });
      }
    }, 1000);

    return;
  };

  const SignOut = async () => {
    setLoading(true);

    const [error, data] = await fetcher('/authentication/signout');

    //if google account
    if (user?.Type === 'GOOGLE') {
      await GoogleSignin.signOut();
    }

    if (error && !data) {
      setUser(null);
      setLoading(false);
      return;
    }

    setUser(null);
    setAuth(false);
    setLoading(false);
  };

  const SignIn = async (values: SignInTypes): Promise<AuthReturn> => {
    setLoading(true);

    const [error, data]: any[string] = await poster(
      '/authentication/signin',
      values,
    );

    if (error && !data) {
      setUser(null);
      setLoading(false);
      return [error, data];
    }

    setAuth(true);
    setLoading(false);
    setVerfied(data?.user?.verfied);
    setUser(data?.user);

    if (data?.user?.id) {
      OneSignal.setExternalUserId(data?.user?.id);
    }

    return [error, data];
  };

  //Google
  const GoogleSignIn = async (values: GoogleArgs): Promise<AuthReturn> => {
    setLoading(true);

    const [error, data]: any[string] = await poster(
      '/authentication/google',
      values,
    );

    if (error && !data) {
      setUser(null);
      setLoading(false);
      return [error, data];
    }

    setAuth(true);
    setLoading(false);
    setVerfied(data?.user?.verfied);
    setUser(data?.user);

    if (data?.user?.id) {
      OneSignal.setExternalUserId(data?.user?.id);
    }

    return [error, data];
  };

  //Apple
  const AppleSignIn = async (values: AppleArgs): Promise<AuthReturn> => {
    setLoading(true);

    const [error, data]: any[string] = await poster(
      '/authentication/apple',
      values,
    );

    if (error && !data) {
      setUser(null);
      setLoading(false);
      return [error, data];
    }

    setAuth(true);
    setLoading(false);
    setVerfied(data?.user?.verfied);
    setUser(data?.user);

    if (data?.user?.id) {
      OneSignal.setExternalUserId(data?.user?.id);
    }

    return [error, data];
  };

  const SignUp = async (values: SignUpTypes) => {
    setLoading(true);

    const [error, data]: any[string] = await poster(
      '/authentication/signup',
      values,
    );

    if (error && !data) {
      setUser(null);
      setLoading(false);
      return [error, data];
    }

    setAuth(true);
    setLoading(false);
    setVerfied(data?.user?.verfied);
    setUser(data?.user);

    if (data?.user?.id) {
      OneSignal.setExternalUserId(data?.user?.id);
    }

    return [error, data];
  };

  const Unauthorized = async () => {
    setLoading(true);
    setUser(null);
    setAuth(false);
    setVerfied(null);
    setLoading(false);
  };

  const Verified = async () => {
    setVerfied(true);
  };

  const UpdateLoading = async (val: boolean) => {
    setLoadingGraphql(val);
  };

  const AddProfile = async (val: UserProfileType | null) => {
    if (user) {
      const newProfile = {...user, Profile: val};

      setUser(newProfile);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        user,
        authLoading: loading,
        verfied,
        SignOut,
        SignIn,
        SignUp,
        Unauthorized,
        Verified,
        GoogleSignIn,
        Authenticate,
        AppleSignIn,
        AddProfile,
        GraphQlLoading: loadingGraphql,
        UpdateLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);
