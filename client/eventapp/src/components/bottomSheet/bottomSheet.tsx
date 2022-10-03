import RNBottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import React, {forwardRef} from 'react';
import {Portal} from 'react-native-paper';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {styles} from './styles.bottomSheetLayout';

type Props = BottomSheetProps;

const BottomSheet = forwardRef<RNBottomSheet, Props>(({...rest}, ref) => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const handleColor = Colors.OnSurface;

  return (
    <Portal>
      <RNBottomSheet
        {...rest}
        ref={ref}
        handleIndicatorStyle={{
          backgroundColor: handleColor,
        }}
        backgroundStyle={styles.bottomSheetContainer}
      />
    </Portal>
  );
});

export default BottomSheet;
