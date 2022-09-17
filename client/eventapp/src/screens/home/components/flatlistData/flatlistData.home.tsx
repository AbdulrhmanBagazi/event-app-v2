import React from 'react';
import {useQuery} from '@apollo/client';
import {
  Events_ListDocument,
  Events_ListQuery,
  Events_ListQueryVariables,
  Order,
} from '../../../../graphql/generated';
import MyCard from '../card/card.home';
import CardLoading from '../card/cardLoading.home';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';
import {FlatList} from 'react-native-gesture-handler';

const FlatListData = () => {
  const {data, loading} = useQuery<Events_ListQuery, Events_ListQueryVariables>(
    Events_ListDocument,
    {
      variables: {page: 0, perPage: 3, sortOrder: Order.Asc},
      context: {clientName: 'public_client'},
    },
  );

  return (
    <>
      {loading ? (
        <CardLoading />
      ) : (
        <FlatList
          horizontal
          scrollEnabled
          pagingEnabled
          decelerationRate={'fast'}
          snapToInterval={SCREEN_WIDTH - 20}
          snapToAlignment={'center'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <MyCard
                changeWidth={
                  data ? (data?.Events_list.length > 1 ? true : false) : false
                }
                data={item}
              />
            );
          }}
          data={data?.Events_list}
          keyExtractor={(_item, index) => index.toString()}
        />
      )}
    </>
  );
};

export default FlatListData;
