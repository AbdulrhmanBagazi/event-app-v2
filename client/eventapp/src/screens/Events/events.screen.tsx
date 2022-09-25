import {useHeaderHeight} from '@react-navigation/elements';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Page from '../../layout/page';
import {ParamList, RootStackParamList} from '../../typs';
import MoreEvents from './components/moreEvents/moreEvents.home';

const Events = () => {
  const {setOptions, pop} =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<ParamList, 'Events'>>();

  React.useLayoutEffect(() => {
    return setOptions({
      title: route.params.params.title,
    });
  }, [pop, route.params.params.title, setOptions]);

  return (
    <Page paddingHorizontal={0}>
      <View style={{height: useHeaderHeight()}} />
      <MoreEvents sectionId={route.params.params.sectionId} />
    </Page>
  );
};

export default Events;
