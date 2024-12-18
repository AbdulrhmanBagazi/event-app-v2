import * as React from 'react';
import {en, registerTranslation} from 'react-native-paper-dates';
import {AppRegistry, Platform} from 'react-native';
import Index from './src';
import {ThemeProvider} from './src/context/theme/themeToggle.context';
import Layout from './src/layout/layout';
import {I18nProvider} from './src/context/I18n/i18n.context';
import {AuthProvider} from './src/context/auth/auth.context';
import {ErrorProvider} from './src/context/error/error.context';
import {ApolloProvider} from '@apollo/client';
import Client from './src/api/apollo';
import OneSignal from 'react-native-onesignal';
import {OneSignalKey} from './config/config';
import {NotificationProvider} from './src/context/notifications/notification.context';
import countries from 'i18n-iso-countries';
// import { firebase } from '@react-native-firebase/analytics';
// await firebase.analytics().setAnalyticsCollectionEnabled(true);

// OneSignal Initialization
OneSignal.setAppId(OneSignalKey);

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  notificationReceivedEvent => {
    // console.log(
    //   'OneSignal: notification will show in foreground:',
    //   notificationReceivedEvent,
    // );
    let notification = notificationReceivedEvent.getNotification();
    // console.log('notification: ', notification);
    // const data = notification.additionalData;
    // console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  },
);

//Method for handling notifications opened
// OneSignal.setNotificationOpenedHandler(notification => {
//   console.log('OneSignal: notification opened:', notification);
// });

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ApolloProvider client={Client}>
          <I18nProvider>
            <NotificationProvider>
              <Layout>
                <ErrorProvider>
                  <Index />
                </ErrorProvider>
              </Layout>
            </NotificationProvider>
          </I18nProvider>
        </ApolloProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

registerTranslation('en', en);
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/ar.json'));

export default AppRegistry.registerComponent(
  Platform.OS === 'ios' ? 'eventapp' : 'events',
  () => App,
);
