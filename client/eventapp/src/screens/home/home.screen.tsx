import React from 'react';
import Page from '../../layout/page';
import {useHeaderHeight} from '@react-navigation/elements';
import {View} from 'react-native';
import MoreEvents from '../Events/components/moreEvents/moreEvents.home';

const Home = () => {
  return (
    <Page paddingHorizontal={0}>
      <View style={{height: useHeaderHeight()}} />
      <MoreEvents />
    </Page>
  );
};

export default Home;
