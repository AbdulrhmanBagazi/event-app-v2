import React from 'react';
import Page from '../../layout/page';
import {ScreenType} from '../../typs';
import MoreEvents from './components/moreEvents/moreEvents.home';

const Events = ({route, navigation}: ScreenType) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route?.params.title,
    });
  }, [navigation, route?.params.title]);

  if (!route?.params.sectionId) {
    return null;
  }
  return (
    <Page paddingHorizontal={0}>
      <MoreEvents sectionId={route.params.sectionId} />
    </Page>
  );
};

export default Events;
