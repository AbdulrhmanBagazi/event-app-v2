import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../layout/screenDimensions';

export const styles = StyleSheet.create({
  customButton: {
    // marginHorizontal: 50,
    width: SCREEN_WIDTH / 1.5,
    borderRadius: 2,
    marginVertical: 10,
    alignSelf: 'center',
  },
  customButtonContainer: {
    padding: 5,
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: 'black',
  },
});