import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Routes
import {AuthScreens} from './routes';
//Context
//Bottom Tabs
import {
  AuthenticatedTypes,
  I18nContextType,
  RoutesType,
  ThemeContextType,
} from '../typs';
import {useI18nContext} from '../context/I18n/i18n.context';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../context/auth/auth.context';

const Auth = createStackNavigator();
const AuthStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {authLoading} = useAuth() as AuthenticatedTypes;

  return (
    <Auth.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Background,
        },
        headerTintColor: Colors.OnBackground,
        headerShadowVisible: false,
        // headerShown: false, //!!
        headerBackTitleVisible: false,
        gestureEnabled: !authLoading,
        cardStyle: {
          backgroundColor: Colors.Background,
        },
      }}>
      {AuthScreens.map((route: RoutesType, i: number) => (
        <Auth.Screen
          name={route.name}
          options={() => ({
            title: Locals[route.name] ? Locals[route.name].Title : '!',
          })}
          key={i}>
          {props => <route.component {...props} i18n={Locals} />}
        </Auth.Screen>
      ))}
    </Auth.Navigator>
  );
};

export default AuthStack;
