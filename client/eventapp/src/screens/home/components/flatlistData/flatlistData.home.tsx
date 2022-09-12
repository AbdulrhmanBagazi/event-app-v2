import React from 'react';
import {useQuery} from '@apollo/client';
import {FlatList} from 'react-native-gesture-handler';
import {
  Order,
  Posts_ListDocument,
  Posts_ListQuery,
  Posts_ListQueryVariables,
} from '../../../../graphql/generated';
import MyCard from '../card/card.home';
import CardLoading from '../card/cardLoading.home';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';

const FlatListData = () => {
  const {data, loading} = useQuery<Posts_ListQuery, Posts_ListQueryVariables>(
    Posts_ListDocument,
    {
      variables: {page: 0, perPage: 6, sortOrder: Order.Asc},
      context: {clientName: 'public_client'},
    },
  );

  return (
    <>
      {!data && loading ? (
        <CardLoading />
      ) : (
        <FlatList
          horizontal
          scrollEnabled
          pagingEnabled
          decelerationRate={0}
          snapToInterval={SCREEN_WIDTH - 20}
          snapToAlignment={'center'}
          // onEndReached={
          //   data
          //     ? data?.Posts_list.length >= 4
          //       ? null
          //       : () => {
          //           fetchMore({
          //             variables: {page: 1, perPage: 2, sortOrder: Order.Asc},
          //             updateQuery: (
          //               previousResult: Posts_ListQuery,
          //               {fetchMoreResult},
          //             ) => {
          //               if (
          //                 !fetchMoreResult ||
          //                 fetchMoreResult.Posts_list.length === 0
          //               ) {
          //                 return previousResult;
          //               }
          //               return {
          //                 // Append the new feed results to the old one
          //                 Posts_list: previousResult.Posts_list.concat(
          //                   fetchMoreResult.Posts_list,
          //                 ),
          //                 Posts_list_meta: fetchMoreResult.Posts_list_meta,
          //               };
          //             },
          //           });
          //         }
          //     : null
          // }
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <MyCard
                name={item.title}
                changeWidth={
                  data ? (data?.Posts_list.length > 1 ? true : false) : false
                }
              />
            );
          }}
          data={data?.Posts_list}
          keyExtractor={(_item, index) => index.toString()}
        />
      )}
    </>
  );
};

export default FlatListData;
