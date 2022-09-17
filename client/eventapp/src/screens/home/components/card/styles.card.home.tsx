import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 2.5,
    marginVertical: 5,
  },
  cardImage: {
    height: 195,
  },
  cardTextContainer: {
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  cardTextTitle: {
    width: 300,
    height: 20,
    borderRadius: 2,
  },
  cardTextSub: {
    marginVertical: 10,
    width: 80,
    height: 20,
    borderRadius: 2,
  },
  CardAction: {
    alignSelf: 'flex-end',
  },
  CardPrice: {
    fontWeight: 'bold',
  },
  TopCardLayer: {
    borderRadius: 2,
  },
  TopCardImage: {
    opacity: 0.4,
  },
  TopCardImageLayer: {
    position: 'absolute',
    top: 10,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopCardAvatart: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 50,
    height: 50,
  },
});