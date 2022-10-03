import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './App.RootNavigation';
import {
  AuthenticatedTypes,
  I18nContextType,
  RoutesType,
  ThemeContextType,
} from './typs';
import {UseAuth} from './context/auth/auth.context';
import TabStack from './routes/TabStack';
import {UseThemeContext} from './context/theme/themeToggle.context';
import {UseI18nContext} from './context/I18n/i18n.context';
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
import {Portal} from 'react-native-paper';

const Main = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(255, 255, 255 ,0.0)',
  },
};

const Index = () => {
  const {authLoading, Authenticate, GraphQlLoading} =
    UseAuth() as AuthenticatedTypes;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Locals} = UseI18nContext() as I18nContextType;
  const routeNameRef = React.useRef<any>();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <Portal.Host>
        <Page paddingHorizontal={0} loadingLayer={true}>
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
                  {props => <route.component {...props} />}
                </Main.Screen>
              ))}
              <Main.Screen
                options={() => ({
                  animation: Platform.OS === 'ios' ? 'fade' : 'default',
                  headerTitle: () => <HeaderLogo />,
                })}
                name="Main"
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
                  {props => <route.component {...props} />}
                </Main.Screen>
              ))}
              {AuthScreens.map((route: RoutesType, i: number) => (
                <Main.Screen
                  name={route.name}
                  options={{
                    title: Locals[route.name] ? Locals[route.name].Title : '',
                    gestureEnabled: !authLoading,
                  }}
                  key={i}>
                  {props => <route.component {...props} />}
                </Main.Screen>
              ))}
              {EventsScreens.map((R: RoutesType, i: number) => (
                <Main.Screen name={R.name} key={i}>
                  {props => <R.component {...props} />}
                </Main.Screen>
              ))}
            </Main.Navigator>
          </NavigationContainer>
        </Page>
      </Portal.Host>
    </GestureHandlerRootView>
  );
};

export default Index;
