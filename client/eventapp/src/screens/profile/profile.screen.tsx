import React, {useMemo, useRef} from 'react';
import {View} from 'react-native';
import {styles} from './styles.profile';
import Page from '../../layout/page';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import RNBottomSheet from '@gorhom/bottom-sheet';
import BottomSheet from '../../components/bottomSheet/bottomSheet';
import BottomSheetLayout from './components/bottomSheetLayout/bottomSheetLayout';
import CustomBackdrop from '../../components/bottomSheet/customBackdrop';
import CustomBackground from '../../components/bottomSheet/customBackground';
import ProfileList from './components/profileList/profileList.profile';
import {ScrollView} from 'react-native-gesture-handler';
import {useHeaderHeight} from '@react-navigation/elements';

const Profile = () => {
  const refBottomSheet = useRef<RNBottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleOpenPress = () => refBottomSheet.current?.expand();
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <Page paddingHorizontal={0}>
      <View style={{height: useHeaderHeight()}} />
      <View style={styles.profileContainer}>
        <ScrollView>
          <ProfileList onPress={() => handleOpenPress()} />
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
