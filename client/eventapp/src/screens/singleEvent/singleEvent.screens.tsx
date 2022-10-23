import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Platform, View} from 'react-native';
import Page from '../../layout/page';
import {
  I18nContextType,
  ParamList,
  RootStackParamList,
  ThemeContextType,
} from '../../typs';
import {styles} from './styles.singleEvent';
import DataSingleEvent from './components/DataSingleEvent/data.singleEvent';
import HeaderSingleEvent from './components/HeaderSingleEvent/header.singleEvent';
import DescriptionSingleEvent from './components/DescriptionSingleEvent/description.singleEvent';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {Button} from 'react-native-paper';
import {UseI18nContext} from '../../context/I18n/i18n.context';
import {StackNavigationProp} from '@react-navigation/stack';
import {SCREEN_HEIGHT} from '../../layout/screenDimensions';

const SingleEvent = () => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {setOptions, navigate} =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<ParamList, 'Event'>>();
  const {Locals} = UseI18nContext() as I18nContextType;
  const data = route.params.params;

  const getHeaderHeight = useHeaderHeight();
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const spaceColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [
          0,
          Platform.OS === 'ios' ? getHeaderHeight * 1.5 : getHeaderHeight * 2.5,
        ],
        ['transparent', Colors.Background],
      ),
    };
  });

  React.useEffect(() => {
    return setOptions({
      title: '',
    });
  }, [setOptions]);

  return (
    <Page paddingHorizontal={0}>
      <View style={[styles.Container, {backgroundColor: Colors.Background}]}>
        <HeaderSingleEvent data={data} style={spaceColor} />
        <View
          style={[
            styles.Scroll,
            {
              top: getHeaderHeight,
              height: SCREEN_HEIGHT,
            },
          ]}>
          <Animated.ScrollView
            onScroll={onScroll}
            contentContainerStyle={styles.contentContainerStyle}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                height:
                  Platform.OS === 'ios'
                    ? getHeaderHeight * 1.5
                    : getHeaderHeight * 2.5,
              }}
            />
            <DataSingleEvent data={data} />
            <DescriptionSingleEvent data={data} />
          </Animated.ScrollView>
        </View>
        <Button
          onPress={() =>
            navigate('Apply', {
              params: data,
            })
          }
          mode="contained"
          color={Colors.Primary}
          labelStyle={{color: Colors.OnSecondary}}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.Button, {bottom: Platform.OS === 'ios' ? 40 : 20}]}
          disabled={
            route.params.params.Event_Jobs.length <= 0 ||
            data.status !== 'ACTIVE'
              ? true
              : false
          }>
          {Locals.SingleEvent.Apply}
        </Button>
      </View>
    </Page>
  );
};

export default SingleEvent;
