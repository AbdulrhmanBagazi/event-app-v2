import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {marginHorizontal: 5, marginVertical: 5, borderWidth: 0},
  cardImage: {
    height: 195,
  },
  CardAction: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  CardPrice: {
    fontWeight: 'bold',
  },

  TopCardAvatart: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardText: {
    color: '#ffffff',
  },
  Image: {
    width: 45,
    height: 50,
  },
  fixCardBorder: {
    borderRadius: 2,
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRightIcon: {
    marginHorizontal: 10,
    top: -10,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
});
