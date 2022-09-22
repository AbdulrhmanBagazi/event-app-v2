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
import CustomText from '../components/customText/customText';
import HeaderLogo from './components/headerLogo';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const {isAuthenticated} = useAuth() as AuthenticatedTypes;

  return (
    <Portal.Host>
      <Tab.Navigator
        detachInactiveScreens={false}
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: Colors.Surface,
            width: '100%',
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerTintColor: Colors.OnBackground,
          tabBarActiveTintColor: Colors.Primary,
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => {
            let iconName = 'folder';
            if (route.name === 'Main') {
              iconName = 'home';
            } else if (route.name === 'Profile' && isAuthenticated) {
              iconName = 'account';
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
              headerTitle: () =>
                route.name === 'Main' ? (
                  <HeaderLogo />
                ) : (
                  <CustomText
                    text={Locals?.Tabs[route.name]}
                    fontWeight="bold"
                    Color={'OnBackground'}
                  />
                ),
              // headerShown: false,
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
