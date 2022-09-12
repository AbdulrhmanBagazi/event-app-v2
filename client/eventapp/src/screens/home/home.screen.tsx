import React from 'react';
import Page from '../../layout/page';
import {ScreenType} from '../../typs';
import FlatListData from './components/flatlistData/flatlistData.home';

const Home = ({}: ScreenType) => {
  return (
    <Page paddingHorizontal={0}>
      <FlatListData />
    </Page>
  );
};

export default Home;
