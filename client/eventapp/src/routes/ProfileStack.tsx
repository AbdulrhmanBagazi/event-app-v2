import React from 'react';
import {I18nContextType, RoutesType, ThemeContextType} from '../typs';
import {useI18nContext} from '../context/I18n/i18n.context';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreens} from './routes';

const Profile = createStackNavigator();
const ProfileStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;

  return (
    <Profile.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.Background,
        },
        headerTintColor: Colors.OnBackground,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: Colors.Background,
        },
      }}>
      {ProfileScreens.map((route: RoutesType, i: number) => (
        <Profile.Screen
          name={route.name}
          options={() => ({
            title: Locals[route.name] ? Locals[route.name].Title : '',
          })}
          key={i}>
          {props => <route.component {...props} i18n={Locals} />}
        </Profile.Screen>
      ))}
    </Profile.Navigator>
  );
};

export default ProfileStack;
