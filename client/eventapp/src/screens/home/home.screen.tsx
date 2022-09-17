import React from 'react';
import {ScrollView} from 'react-native';
import Page from '../../layout/page';
import {ScreenType} from '../../typs';
import BannerLoading from './components/banner/banner.home';
import FlatListData from './components/flatlistData/flatlistData.home';

const Home = ({}: ScreenType) => {
  return (
    <Page paddingHorizontal={0}>
      <ScrollView>
        <BannerLoading />
        <FlatListData />
      </ScrollView>
    </Page>
  );
};

export default Home;
