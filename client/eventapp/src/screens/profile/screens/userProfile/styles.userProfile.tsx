import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../layout/screenDimensions';

export const styles = StyleSheet.create({
  updateProfileButton: {
    marginBottom: 50,
    marginHorizontal: 5,
  },
  TextInput: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
  },
  countryPickerButton: {
    padding: 5,
    marginVertical: 5,
  },
  datePickerButton: {
    padding: 5,
    marginVertical: 5,
  },
  ViewRowInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  RadioButton: {
    width: SCREEN_WIDTH / 2,
    marginVertical: 5,
    marginHorizontal: 2.5,
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
});
