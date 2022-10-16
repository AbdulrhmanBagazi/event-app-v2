import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../layout/screenDimensions';

export const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginVertical: 20,
  },
  RadioItem: {
    marginHorizontal: 5,
    marginVertical: 20,
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
  },
  shiftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ItemCaption: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    // marginVertical: 10,
  },
  Divider: {
    marginVertical: 10,
  },
  Caption: {
    flex: 1,
  },
  loadingView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Modal: {
    width: SCREEN_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 50,
    borderRadius: 5,
  },
  descriptionStyle: {
    marginVertical: 5,
  },
  listStylefirst: {
    marginTop: 5,
    padding: 0,
  },
  listStyle: {
    padding: 0,
  },
  BackButtons: {
    marginVertical: 5,
    // width: SCREEN_WIDTH / 2,
    // alignSelf: 'center',
  },
});
