import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../../layout/screenDimensions';

export const styles = StyleSheet.create({
  Headline: {
    marginHorizontal: 10,
    marginVertical: 10,
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
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
  scrollview: {
    paddingBottom: 250,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  Badge: {
    alignSelf: 'center',
  },
});
