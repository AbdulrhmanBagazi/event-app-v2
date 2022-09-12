import React from 'react';
import {View} from 'react-native';
import {styles} from './styles.bottomSheetLayout';
import SelectLanguage from '../../../../components/selectLanguage/selectLanguage';
import {NotificationContextType, ThemeContextType} from '../../../../typs';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import CustomText from '../../../../components/customText/customText';
import CustomSwitch from '../../../../components/customSwitch/customSwitch';
import {useNotificationContext} from '../../../../context/notifications/notification.context';

const BottomSheetLayout: React.FC<{
  i18n: any;
}> = ({i18n}) => {
  const {ToggleTheme, isDarkMode} = useThemeContext() as ThemeContextType;
  const {ToggleNotification, Notification, notificationLoading} =
    useNotificationContext() as NotificationContextType;

  return (
    <View style={styles.bottomSheetContainer}>
      <CustomText
        text={i18n.Settings.Theme}
        fontWeight="bold"
        Color="OnSurface"
      />
      <CustomSwitch
        value={isDarkMode}
        onPress={() => ToggleTheme()}
        text={i18n.Settings.DarkMode}
      />
      <CustomText
        text={i18n.Settings.Notification}
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
        text={i18n.Settings.Push}
        Loading={notificationLoading}
      />
      <CustomText
        text={i18n.Settings.Language}
        fontWeight="bold"
        Color="OnSurface"
      />
      <SelectLanguage />
    </View>
  );
};

export default BottomSheetLayout;
