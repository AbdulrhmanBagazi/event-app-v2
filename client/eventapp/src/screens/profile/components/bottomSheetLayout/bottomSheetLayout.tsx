import React from 'react';
import {View} from 'react-native';
import {styles} from './styles.bottomSheetLayout';
import SelectLanguage from '../../../../components/selectLanguage/selectLanguage';
import {
  I18nContextType,
  NotificationContextType,
  ThemeContextType,
} from '../../../../typs';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import CustomText from '../../../../components/customText/customText';
import CustomSwitch from '../../../../components/customSwitch/customSwitch';
import {useNotificationContext} from '../../../../context/notifications/notification.context';
import {useI18nContext} from '../../../../context/I18n/i18n.context';

const BottomSheetLayout = () => {
  const {Locals} = useI18nContext() as I18nContextType;
  const {ToggleTheme, isDarkMode} = useThemeContext() as ThemeContextType;
  const {ToggleNotification, Notification, notificationLoading} =
    useNotificationContext() as NotificationContextType;

  return (
    <View style={styles.bottomSheetContainer}>
      <CustomText
        text={Locals.Settings.Theme}
        fontWeight="bold"
        Color="OnSurface"
      />
      <CustomSwitch
        value={isDarkMode}
        onPress={() => ToggleTheme()}
        text={Locals.Settings.DarkMode}
      />
      <CustomText
        text={Locals.Settings.Notification}
        fontWeight="bold"
        Color="OnSurface"
      />
      <CustomSwitch
        value={
          Notification?.hasNotificationPermission
            ? !Notification.isPushDisabled
            : false
        }
        onPress={() => ToggleNotification()}
        text={Locals.Settings.Push}
        Loading={notificationLoading}
      />
      <CustomText
        text={Locals.Settings.Language}
        fontWeight="bold"
        Color="OnSurface"
      />
      <SelectLanguage />
    </View>
  );
};

export default BottomSheetLayout;
