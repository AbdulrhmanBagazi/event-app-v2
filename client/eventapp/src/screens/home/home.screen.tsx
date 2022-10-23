import React from 'react';
import Page from '../../layout/page';
import {I18nContextType, RootStackParamList} from '../../typs';
import Sections from './components/sections/sectionsHeader.home';
import {useQuery} from '@apollo/client';
import {
  App_Section_ListDocument,
  App_Section_ListQuery,
  App_Section_ListQueryVariables,
} from '../../graphql/generated';
import {FlatList} from 'react-native-gesture-handler';
import {UseI18nContext} from '../../context/I18n/i18n.context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useHeaderHeight} from '@react-navigation/elements';
import {View} from 'react-native';
import Loading from '../../layout/loading';
import BannerLoading from './components/banner/banner.home';

const Home = () => {
  const headerHeight = useHeaderHeight();
  const {Lang} = UseI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {data, loading} = useQuery<
    App_Section_ListQuery,
    App_Section_ListQueryVariables
  >(App_Section_ListDocument, {
    context: {clientName: 'public_client'},
  });

  if (!loading && !data) {
    return <Loading />;
  }

  return (
    <Page paddingHorizontal={0} loadingLayer={true}>
      <View
        style={{
          height: headerHeight,
        }}
      />
      <FlatList
        ListHeaderComponent={<BannerLoading />}
        renderItem={({item, index}) => {
          return (
            <Sections
              data={item}
              index={index}
              navigate={() =>
                navigate('All_Events', {
                  params: {
                    app_sectionId: item.id,
                    title: Lang === 'en' ? item.title_en : item.title,
                  },
                })
              }
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        data={data?.app_section_list}
        keyExtractor={(_item: any, index: {toString: () => any}) =>
          index.toString()
        }
      />
    </Page>
  );
};

export default Home;
