import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreens} from './routes';
import {AuthenticatedTypes, RoutesType, ThemeContextType} from '../typs';
import {UseThemeContext} from '../context/theme/themeToggle.context';
import {IconButton} from 'react-native-paper';
import {UseAuth} from '../context/auth/auth.context';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  const {Colors, isDarkMode} = UseThemeContext() as ThemeContextType;
  const {isAuthenticated} = UseAuth() as AuthenticatedTypes;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.Surface : Colors.Background,
          width: '100%',
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile' && isAuthenticated) {
            iconName = 'account';
          } else if (route.name === 'JobsList') {
            iconName = 'briefcase';
          } else {
            iconName = 'login';
          }

          return (
            <IconButton icon={iconName} size={size} color={color} animated />
          );
        },
      })}>
      {TabScreens.map((route: RoutesType, i: number) => (
        <Tab.Screen name={route.name} key={i} component={route.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabStack;
