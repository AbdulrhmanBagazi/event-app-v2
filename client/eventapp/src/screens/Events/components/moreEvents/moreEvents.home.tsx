import React from 'react';
import {useQuery} from '@apollo/client';
import {
  Events_ListDocument,
  Events_ListQuery,
  Events_ListQueryVariables,
  Order,
} from '../../../../graphql/generated';
import MyCard from '../../../home/components/card/card.home';
import CardLoading from '../../../home/components/card/cardLoading.home';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles.moreEvents';
import ReloadButton from '../../../../components/reloadButton/reloadButton';

const MoreEvents: React.FC<{sectionId: string}> = ({sectionId}) => {
  const {data, loading, error, refetch} = useQuery<
    Events_ListQuery,
    Events_ListQueryVariables
  >(Events_ListDocument, {
    variables: {
      page: 0,
      perPage: 50,
      sortOrder: Order.Desc,
      sectionId: sectionId,
    },
    context: {clientName: 'public_client'},
  });

  if (error) {
    return <ReloadButton Refetch={() => refetch()} />;
  }

  return (
    <>
      {loading ? (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.FlatlistContainer}
          renderItem={({item, index}) => {
            return (
              <MyCard
                changeWidth={false}
                data={item}
                index={index}
                animation="Down"
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

export default MoreEvents;
