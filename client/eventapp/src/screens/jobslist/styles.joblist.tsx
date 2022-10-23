import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../layout/screenDimensions';

export const styles = StyleSheet.create({
  RadioItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  RadioView: {
    paddingTop: 5,
    // marginHorizontal: 20,
  },
  contentContainerStyle: {
    paddingTop: 5,
    flex: 1,
  },
  Headline: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  notAuth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
  shiftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
  },
  scrollview: {
    flex: 1,
  },
  dataView: {
    flex: 1,
    width: SCREEN_WIDTH,
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  userInfoView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  userInfo: {
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
  },
  TextView: {
    // padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  LogoView: {
    // alignSelf: 'center',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 5,
  },
  TopCardAvatart: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 45,
    height: 50,
  },
  MainView: {
    flex: 1,
  },
  Container: {
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
});
