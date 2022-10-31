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
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Subheading: {
    marginHorizontal: 5,
  },
  CardBadge: {
    alignSelf: 'center',
    marginRight: 10,
    fontWeight: 'bold',
  },
});
