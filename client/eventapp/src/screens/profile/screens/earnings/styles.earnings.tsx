import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../layout/screenDimensions';

export const styles = StyleSheet.create({
  Logo: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    height: SCREEN_HEIGHT / 6,
    resizeMode: 'contain',
  },
});
