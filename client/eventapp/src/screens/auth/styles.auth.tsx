import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../layout/screenDimensions';

export const styles = StyleSheet.create({
  Logo: {
    alignSelf: 'center',
  },
  Buttons: {
    marginVertical: 5,
    width: SCREEN_WIDTH / 2,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 50,
    marginVertical: 10,
  },
  ConnectView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  Divider: {
    flex: 1,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  SocialButtons: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
