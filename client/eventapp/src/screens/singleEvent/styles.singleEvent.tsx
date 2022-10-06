import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../layout/screenDimensions';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  MainView: {
    flex: 1,
  },
  Scroll: {
    width: SCREEN_WIDTH,
    borderRadius: 5,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  Button: {
    left: 0,
    right: 0,
    bottom: 40,
    position: 'absolute',
    marginHorizontal: 15,
  },
});
