import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';
import {styles} from './styles.profile';
import {AuthenticatedTypes, I18nContextType} from '../../typs';
import Page from '../../layout/page';
import CustomText from '../../components/customText/customText';
import HeaderLeftButtons from '../../components/headerLeftButtons/headerLeftButtons';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import SignOutButton from '../../components/signOutButton/signOutButton';
import {useAuth} from '../../context/auth/auth.context';
import RNBottomSheet from '@gorhom/bottom-sheet';
import BottomSheet from '../../components/bottomSheet/bottomSheet';
import BottomSheetLayout from './components/bottomSheetLayout/bottomSheetLayout';
import CustomBackdrop from '../../components/bottomSheet/customBackdrop';
import CustomBackground from '../../components/bottomSheet/customBackground';
import UpdateProfileBanner from './components/updateProfileBanner/updateProfileBanner';
import {useI18nContext} from '../../context/I18n/i18n.context';

const Profile = () => {
  const {Locals} = useI18nContext() as I18nContextType;
  const refBottomSheet = useRef<RNBottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleOpenPress = () => refBottomSheet.current?.expand();
  const {Colors} = useThemeContext() as ThemeContextType;
  const {user} = useAuth() as AuthenticatedTypes;
  const {setOptions} = useNavigation();

  React.useLayoutEffect(() => {
    return setOptions({
      headerRight: () => (
        <HeaderLeftButtons onPress={() => handleOpenPress()} />
      ),
    });
  }, [setOptions]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        // Useful for cleanup functions

        refBottomSheet.current?.close();
      };
    }, []),
  );

  return (
    <Page paddingHorizontal={5}>
      <UpdateProfileBanner />

      <View style={styles.profileContainer}>
        <CustomText
          text={`${
            user?.email ? Locals.Home.Welcome + user?.email : Locals.Home.Error
          }`}
          fontWeight="normal"
          Color="OnSurface"
          style={styles.title}
        />

        <SignOutButton />
      </View>

      <BottomSheet
        ref={refBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          backgroundColor: Colors.OnSurface,
        }}
        backgroundComponent={CustomBackground}
        enablePanDownToClose
        backdropComponent={CustomBackdrop}>
        <BottomSheetLayout />
      </BottomSheet>
    </Page>
  );
};

export default Profile;
