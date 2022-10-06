import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 0,
  },
  cardImage: {
    height: 195,
  },
  CardAction: {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  dataView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  CardPrice: {
    fontWeight: 'bold',
  },
  TopCardImage: {
    opacity: 0.25,
    height: 150,
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
  TopCardTextLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardText: {
    color: '#ffffff',
  },
  Image: {
    width: 45,
    height: 50,
  },
  CardBadge: {
    // position: 'absolute',
    // bottom: 10,
    // right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
  },
  fixCardBorder: {
    borderRadius: 2,
  },
  MainCardView: {
    borderRadius: 2.5,
  },
  Font: {
    fontSize: 12,
  },
  Item: {
    // flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
