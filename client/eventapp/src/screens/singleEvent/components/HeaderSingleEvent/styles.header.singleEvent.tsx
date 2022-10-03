import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';

export const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  Image: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    padding: 5,
  },
  Row: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RowItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  TopCardAvatart: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CompanyLogo: {
    width: 80,
    height: 90,
  },
  Scroll: {
    width: SCREEN_WIDTH,
    borderRadius: 5,
  },
  HeaderSpace: {
    // backgroundColor: 'red',
    top: -5,
  },
});
