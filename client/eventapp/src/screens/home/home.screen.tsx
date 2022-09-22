import React from 'react';
import Page from '../../layout/page';
import {I18nContextType, RootStackParamList} from '../../typs';
import Sections from './components/sections/sectionsHeader.home';
import {useQuery} from '@apollo/client';
import {
  Sections_ListDocument,
  Sections_ListQuery,
  Sections_ListQueryVariables,
} from '../../graphql/generated';
import {FlatList} from 'react-native-gesture-handler';
import {useI18nContext} from '../../context/I18n/i18n.context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Home = () => {
  const {Lang} = useI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {data} = useQuery<Sections_ListQuery, Sections_ListQueryVariables>(
    Sections_ListDocument,
    {
      context: {clientName: 'public_client'},
    },
  );

  return (
    <Page paddingHorizontal={0}>
      <FlatList
        // ListHeaderComponent={<BannerLoading />}
        renderItem={({item, index}) => {
          return (
            <Sections
              data={item}
              index={index}
              navigate={() =>
                navigate('Events', {
                  screen: 'All Events',
                  params: {
                    sectionId: item.id,
                    title: Lang === 'en' ? item.title_en : item.title,
                  },
                })
              }
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        data={data?.Sections_list}
        keyExtractor={(_item: any, index: {toString: () => any}) =>
          index.toString()
        }
      />
    </Page>
  );
};

export default Home;
