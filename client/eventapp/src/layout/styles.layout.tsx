import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from './screenDimensions';

export const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
  },
  children: {
    flex: 1,
    padding: 5,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  ScrollContainer: {
    flex: 1,
  },
  loadingView: {
    flex: 1,
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
});
