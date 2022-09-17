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
});
