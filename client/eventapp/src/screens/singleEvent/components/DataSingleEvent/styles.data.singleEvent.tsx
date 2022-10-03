import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  Row: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
    marginHorizontal: 2.5,
  },
  TextView: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  ItemSmall: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Item: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Subheading: {
    marginHorizontal: 5,
    fontWeight: '400',
    fontSize: 14,
  },
  CardBadge: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
