import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  DeviceState,
  I18nContextType,
  NotificationContextType,
} from '../../typs';
import OneSignal from 'react-native-onesignal';
import {Alert, Linking} from 'react-native';
import {useI18nContext} from '../I18n/i18n.context';

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [isNotification, setNotification] = useState<DeviceState | null>(null);
  const {Locals} = useI18nContext() as I18nContextType;
  const [isLoading, setLoading] = useState(false);

  const ToggleNotification = async () => {
    setLoading(true);
    const state = await OneSignal.getDeviceState();

    if (state) {
      if (state.hasNotificationPermission) {
        OneSignal.disablePush(!state.isPushDisabled);
        setNotification({
          ...state,
          isPushDisabled: !state.isPushDisabled,
        });
      } else {
        Alert.alert(
          Locals.Settings.AllowNotifications,
          Locals.Settings.AllowNotificationsMSG,
          [
            {
              text: 'Open Settings',
              onPress: () => {
                Linking.openSettings();
              },
            },
            {
              text: 'Cancel',
            },
          ],
        );
        return setLoading(false);
      }
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return;
  };

  useEffect(() => {
    const Handle = async () => {
      const state = await OneSignal.getDeviceState();

      return setNotification(state);
    };

    Handle();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        ToggleNotification,
        Notification: isNotification,
        notificationLoading: isLoading,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);
