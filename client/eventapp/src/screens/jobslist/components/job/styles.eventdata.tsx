import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  Row: {
    flexDirection: 'row',
    marginHorizontal: 2.5,
    flexWrap: 'wrap',
    paddingRight: 8,
  },
  TextView: {
    // marginBottom: 10,
    // marginHorizontal: 10,
    // padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Headline: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Subheading: {
    marginHorizontal: -3,
    marginVertical: 10,
  },
  CardBadge: {
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    // marginRight: 10,
  },
});
