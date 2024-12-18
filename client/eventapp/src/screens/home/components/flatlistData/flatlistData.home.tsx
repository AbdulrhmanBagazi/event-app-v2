import React from 'react';
import {useQuery} from '@apollo/client';
import {
  Events_ListDocument,
  Events_ListQuery,
  Events_ListQueryVariables,
  Order,
} from '../../../../graphql/generated';
import MyCard from '../card/card.home';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles.FlatlistData';

const FlatListData: React.FC<{app_sectionId: string}> = ({app_sectionId}) => {
  const {data} = useQuery<Events_ListQuery, Events_ListQueryVariables>(
    Events_ListDocument,
    {
      variables: {
        page: 0,
        perPage: 2,
        sortOrder: Order.Desc,
        app_sectionId,
      },
      context: {clientName: 'public_client'},
    },
  );

  return (
    <FlatList
      horizontal
      scrollEnabled
      pagingEnabled
      decelerationRate={'fast'}
      snapToInterval={SCREEN_WIDTH - 20}
      snapToAlignment={'center'}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.FlatlistContainer}
      renderItem={({item, index}) => {
        return (
          <MyCard
            changeWidth={
              data ? (data?.Events_list.length > 1 ? true : false) : false
            }
            data={item}
            index={index}
          />
        );
      }}
      data={data?.Events_list}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default FlatListData;
