import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './App.RootNavigation';
import {AuthenticatedTypes, I18nContextType, ThemeContextType} from './typs';
import {useAuth} from './context/auth/auth.context';
import TabStack from './routes/TabStack';
import LoadingStack from './routes/LoadingStack';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {useThemeContext} from './context/theme/themeToggle.context';
import AuthStack from './routes/AuthStack';
import {useI18nContext} from './context/I18n/i18n.context';
import {SCREEN_HEIGHT} from './layout/screenDimensions';

const Main = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Index = () => {
  const {authLoading, Authenticate} = useAuth() as AuthenticatedTypes;
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Locals} = useI18nContext() as I18nContextType;

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={MyTheme}
      onReady={() => Authenticate()}>
      <Main.Navigator
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
          options={{
            title: 'Logo',
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
          name="TabStack"
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
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Index;
