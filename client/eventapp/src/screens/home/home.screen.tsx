import React from 'react';
import Page from '../../layout/page';
import {I18nContextType, ScreenType} from '../../typs';
import BannerLoading from './components/banner/banner.home';
import Sections from './components/sections/sectionsHeader.home';
import {useQuery} from '@apollo/client';
import {
  Sections_ListDocument,
  Sections_ListQuery,
  Sections_ListQueryVariables,
} from '../../graphql/generated';
import {FlatList} from 'react-native-gesture-handler';
import CardLoading from './components/card/cardLoading.home';
import ReloadButton from '../../components/reloadButton/reloadButton';
import {useI18nContext} from '../../context/I18n/i18n.context';

const Home = ({navigation}: ScreenType) => {
  const {Locals} = useI18nContext() as I18nContextType;
  const {data, loading, error, refetch} = useQuery<
    Sections_ListQuery,
    Sections_ListQueryVariables
  >(Sections_ListDocument, {
    context: {clientName: 'public_client'},
  });

  if (error && !loading) {
    return <ReloadButton Refetch={() => refetch()} />;
  }

  return (
    <Page paddingHorizontal={0}>
      {loading ? (
        <CardLoading />
      ) : (
        <FlatList
          renderItem={({item, index}) => {
            return (
              <Sections
                data={item}
                index={index}
                navigate={() =>
                  navigation.navigate('Events', {
                    screen: 'All Events',
                    params: {
                      sectionId: item.id,
                      title: Locals === 'en' ? item.title_en : item.title,
                    },
                  })
                }
              />
            );
          }}
          ListHeaderComponent={<BannerLoading />}
          showsVerticalScrollIndicator={false}
          data={data?.Sections_list}
          keyExtractor={(_item: any, index: {toString: () => any}) =>
            index.toString()
          }
        />
      )}
    </Page>
  );
};

export default Home;
