import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './App.RootNavigation';
import {
  AuthenticatedTypes,
  I18nContextType,
  RoutesType,
  ThemeContextType,
} from './typs';
import {useAuth} from './context/auth/auth.context';
import TabStack from './routes/TabStack';
import {useThemeContext} from './context/theme/themeToggle.context';
import {useI18nContext} from './context/I18n/i18n.context';
import Page from './layout/page';
import analytics from '@react-native-firebase/analytics';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AuthScreens,
  EventsScreens,
  LoadingScreen,
  ProfileScreens,
} from './routes/routes';
import HeaderLogo from './routes/components/headerLogo';

const Main = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Index = () => {
  const {authLoading, Authenticate, GraphQlLoading} =
    useAuth() as AuthenticatedTypes;
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;
  const routeNameRef = React.useRef<any>();

  return (
    <Page paddingHorizontal={0}>
      <NavigationContainer
        ref={navigationRef}
        theme={MyTheme}
        onReady={() => {
          Authenticate();
          routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef.current?.getCurrentRoute()?.name;

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }

          routeNameRef.current = currentRouteName;
        }}>
        <Main.Navigator
          screenOptions={() => ({
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerBackVisible: authLoading ? false : true,
            headerTintColor: Colors.OnBackground,
            headerShadowVisible: false,
          })}>
          {LoadingScreen.map((route: RoutesType, i: number) => (
            <Main.Screen
              name={route.name}
              options={{
                headerShown: false,
              }}
              key={i}>
              {props => <route.component {...props} i18n={Locals} />}
            </Main.Screen>
          ))}
          <Main.Screen
            options={() => ({
              animation: Platform.OS === 'ios' ? 'fade' : 'default',
              headerTitle: () => <HeaderLogo />,
            })}
            name="Home"
            component={TabStack}
          />
          {ProfileScreens.map((route: RoutesType, i: number) => (
            <Main.Screen
              name={route.name}
              options={() => ({
                title: '',
                gestureEnabled: !GraphQlLoading,
              })}
              key={i}>
              {props => <route.component {...props} i18n={Locals} />}
            </Main.Screen>
          ))}
          {AuthScreens.map((route: RoutesType, i: number) => (
            <Main.Screen
              name={route.name}
              options={{
                title: Locals[route.name] ? Locals[route.name].Title : '',
                gestureEnabled: !authLoading,
                gestureDirection:
                  route.name === 'Signup' ? 'horizontal' : 'vertical',
                animation:
                  route.name === 'Signup' ? 'default' : 'slide_from_bottom',
              }}
              key={i}>
              {props => <route.component {...props} i18n={Locals} />}
            </Main.Screen>
          ))}
          {EventsScreens.map((R: RoutesType, i: number) => (
            <Main.Screen name={R.name} key={i}>
              {props => <R.component {...props} i18n={Locals} />}
            </Main.Screen>
          ))}
        </Main.Navigator>
      </NavigationContainer>
    </Page>
  );
};

export default Index;
