import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cardImage: {
    height: 195,
  },
  cardTextContainer: {
    flexDirection: 'column',
    marginVertical: 10,
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
  TopCardImage: {
    opacity: 0.4,
    borderRadius: 2.5,
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
  CardBadge: {
    position: 'absolute',
    bottom: 10,
    marginVertical: 5,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
  },
  fixCardBorder: {
    borderRadius: 2,
  },
});
