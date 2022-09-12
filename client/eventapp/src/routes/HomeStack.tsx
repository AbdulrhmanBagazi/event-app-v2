import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Routes
import {HomeScreens} from './routes';
//Context
//Bottom Tabs
import {I18nContextType, RoutesType, ThemeContextType} from '../typs';
import {useI18nContext} from '../context/I18n/i18n.context';
import {useThemeContext} from '../context/theme/themeToggle.context';

const Home = createNativeStackNavigator();
const HomeStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;

  return (
    <Home.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: Colors.OnBackground,
        headerShadowVisible: false,
        // headerShown: false, //!!
        headerBackTitleVisible: false,
      }}>
      {HomeScreens.map((route: RoutesType, i: number) => (
        <Home.Screen
          name={route.name}
          options={{
            title: Locals[route.name] ? Locals[route.name].Title : '!',
          }}
          key={i}>
          {props => <route.component {...props} i18n={Locals} />}
        </Home.Screen>
      ))}
    </Home.Navigator>
  );
};

export default HomeStack;
