import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';
import {styles} from './styles.profile';
import Page from '../../layout/page';
import HeaderLeftButtons from '../../components/headerLeftButtons/headerLeftButtons';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RNBottomSheet from '@gorhom/bottom-sheet';
import BottomSheet from '../../components/bottomSheet/bottomSheet';
import BottomSheetLayout from './components/bottomSheetLayout/bottomSheetLayout';
import CustomBackdrop from '../../components/bottomSheet/customBackdrop';
import CustomBackground from '../../components/bottomSheet/customBackground';
import UpdateProfileBanner from './components/updateProfileBanner/updateProfileBanner';
import ProfileList from './components/profileList/profileList.profile';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  const refBottomSheet = useRef<RNBottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleOpenPress = () => refBottomSheet.current?.expand();
  const {Colors} = useThemeContext() as ThemeContextType;
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
    <Page paddingHorizontal={0}>
      <View>
        <UpdateProfileBanner />
      </View>

      <View style={styles.profileContainer}>
        <ScrollView>
          <ProfileList />
        </ScrollView>
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
