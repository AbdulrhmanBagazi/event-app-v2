import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Routes
import {ProfileScreens} from './routes';
//Context
//Bottom Tabs
import {I18nContextType, RoutesType, ThemeContextType} from '../typs';
import {useI18nContext} from '../context/I18n/i18n.context';
import {useThemeContext} from '../context/theme/themeToggle.context';

const Profile = createNativeStackNavigator();
const ProfileStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;

  return (
    <Profile.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: Colors.OnBackground,
        headerShadowVisible: false,
        // headerShown: false, //!!
        headerBackTitleVisible: false,
      }}>
      {ProfileScreens.map((route: RoutesType, i: number) => (
        <Profile.Screen
          name={route.name}
          options={{
            title: Locals[route.name] ? Locals[route.name].Title : '!',
          }}
          key={i}>
          {props => <route.component {...props} i18n={Locals} />}
        </Profile.Screen>
      ))}
    </Profile.Navigator>
  );
};

export default ProfileStack;
