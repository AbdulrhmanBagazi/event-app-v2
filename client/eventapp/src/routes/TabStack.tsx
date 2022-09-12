import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreens} from './routes';
import {
  AuthenticatedTypes,
  I18nContextType,
  RoutesType,
  ThemeContextType,
} from '../typs';
import {useI18nContext} from '../context/I18n/i18n.context';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {IconButton, Portal} from 'react-native-paper';
import {useAuth} from '../context/auth/auth.context';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {isAuthenticated, authLoading} = useAuth() as AuthenticatedTypes;

  return (
    <Portal.Host>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: Colors.Surface,
            width: '100%',
          },
          tabBarActiveTintColor: Colors.Primary,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => {
            let iconName = 'folder';
            if (route.name === 'Main') {
              iconName = 'home';
            } else if (route.name === 'Account' && isAuthenticated) {
              iconName = 'account';
            } else if (route.name === 'Account' && authLoading) {
              iconName = 'sync';
            } else {
              iconName = 'login';
            }

            return (
              <IconButton icon={iconName} size={size} color={color} animated />
            );
          },
        })}>
        {TabScreens.map((route: RoutesType, i: number) => (
          <Tab.Screen
            name={route.name}
            options={{
              title: Locals?.Tabs[route.name] ? Locals?.Tabs[route.name] : '!',
              headerShown: false,
            }}
            key={i}>
            {props => <route.component {...props} i18n={Locals} />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </Portal.Host>
  );
};

export default TabStack;
