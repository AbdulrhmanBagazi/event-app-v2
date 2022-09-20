import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './App.RootNavigation';
import {AuthenticatedTypes, I18nContextType, ThemeContextType} from './typs';
import {useAuth} from './context/auth/auth.context';
import TabStack from './routes/TabStack';
import LoadingStack from './routes/LoadingStack';
import {createStackNavigator} from '@react-navigation/stack';
import {useThemeContext} from './context/theme/themeToggle.context';
import AuthStack from './routes/AuthStack';
import {useI18nContext} from './context/I18n/i18n.context';
import {SCREEN_HEIGHT} from './layout/screenDimensions';
import Page from './layout/page';
import analytics from '@react-native-firebase/analytics';
import EventsStack from './routes/EventsStack';
import ProfileStack from './routes/ProfileStack';
import {Platform} from 'react-native';

const Main = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const forFade = ({current}: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const AnimationOptions =
  Platform.OS === 'ios'
    ? {title: '', cardStyleInterpolator: forFade}
    : {
        title: '',
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
          detachInactiveScreens={false}
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: Colors.OnBackground,
            headerShadowVisible: false,
            // cardStyle: {
            //   backgroundColor: Colors.Background,
            // },
            headerShown: false, //!!
          }}>
          <Main.Screen name="LoadingStack" component={LoadingStack} />
          <Main.Screen
            options={AnimationOptions}
            name="Home"
            component={TabStack}
          />
          <Main.Screen
            options={{
              title: Locals.NavigationButton.AuthStack,
              gestureEnabled: !authLoading,
              gestureDirection: 'vertical',
              cardStyleInterpolator: ({current}) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateY: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [SCREEN_HEIGHT, 0],
                        }),
                      },
                    ],
                  },
                };
              },
            }}
            name="AuthStack"
            component={AuthStack}
          />
          <Main.Screen name="Events" component={EventsStack} />
          <Main.Screen
            name="Account"
            component={ProfileStack}
            options={{
              gestureEnabled: !GraphQlLoading,
            }}
          />
        </Main.Navigator>
      </NavigationContainer>
    </Page>
  );
};

export default Index;
