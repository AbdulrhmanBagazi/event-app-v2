import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../layout/screenDimensions';

export const styles = StyleSheet.create({
  updateProfileButton: {
    bottom: 50,
    marginHorizontal: 5,
  },
  TextInput: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
  },
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
  title: {
    fontSize: 36,
    marginVertical: 20,
  },
});
