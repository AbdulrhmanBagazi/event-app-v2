import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import Page from '../../layout/page';
import {ParamList, RootStackParamList} from '../../typs';
import MoreEvents from './components/moreEvents/moreEvents.home';

const Events = () => {
  const {setOptions} = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<ParamList, 'Events'>>();

  React.useLayoutEffect(() => {
    return setOptions({
      title: route.params.title,
    });
  }, [route.params.title, setOptions]);

  return (
    <Page paddingHorizontal={0}>
      <MoreEvents sectionId={route.params.sectionId} />
    </Page>
  );
};

export default Events;
