import React from 'react';
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
import {EventsScreens} from './routes';

const Events = createStackNavigator();
const EventsStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {authLoading} = useAuth() as AuthenticatedTypes;

  return (
    <Events.Navigator
      detachInactiveScreens={false}
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
      {EventsScreens.map((route: RoutesType, i: number) => (
        <Events.Screen
          name={route.name}
          options={() => ({
            title: '',
            // title: '',
          })}
          key={i}>
          {props => <route.component {...props} i18n={Locals} />}
        </Events.Screen>
      ))}
    </Events.Navigator>
  );
};

export default EventsStack;
