import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../layout/screenDimensions';

export const styles = StyleSheet.create({
  Image: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  MainView: {
    flex: 1,
    backgroundColor: 'red',
  },
  TitleView: {
    padding: 5,
    borderRadius: 2.5,
  },
  TopCardAvatart: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginVertical: 5,
  },
  CompanyLogo: {
    width: 110,
    height: 110,
  },
  Scroll: {
    width: SCREEN_WIDTH,
    borderRadius: 5,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
