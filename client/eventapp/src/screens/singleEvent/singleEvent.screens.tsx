import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
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
import {SCREEN_HEIGHT} from '../../layout/screenDimensions';
import HeaderSingleEvent from './components/HeaderSingleEvent/header.singleEvent';
import DescriptionSingleEvent from './components/DescriptionSingleEvent/description.singleEvent';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {Button} from 'react-native-paper';
import {UseI18nContext} from '../../context/I18n/i18n.context';

const SingleEvent = () => {
  const {Colors, isDarkMode} = UseThemeContext() as ThemeContextType;
  const {setOptions} = useNavigation<NavigationProp<RootStackParamList>>();
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
        ['transparent', isDarkMode ? Colors.Surface : Colors.Background],
      ),
    };
  });

  const borderRadius = useAnimatedStyle(() => {
    const borderTopRightRadius = interpolate(
      scrollY.value,
      [-1, 0, 1],
      [5, 5, 0],
    );
    const borderTopLeftRadius = interpolate(
      scrollY.value,
      [-1, 0, 1],
      [5, 5, 0],
    );
    return {
      borderTopRightRadius,
      borderTopLeftRadius,
    };
  });

  React.useEffect(() => {
    return setOptions({
      title: '',
    });
  }, [setOptions]);

  return (
    <Page paddingHorizontal={0}>
      <View
        style={[
          styles.Container,
          {backgroundColor: isDarkMode ? Colors.Surface : Colors.Background},
        ]}>
        <HeaderSingleEvent data={route.params.params} style={spaceColor} />
        <View style={[styles.Scroll, {top: getHeaderHeight}]}>
          <View
            style={[
              styles.MainView,
              {
                height: SCREEN_HEIGHT - getHeaderHeight,
              },
            ]}>
            <Animated.ScrollView
              bounces={false}
              onScroll={onScroll}
              contentContainerStyle={{
                height:
                  Platform.OS === 'ios'
                    ? SCREEN_HEIGHT - getHeaderHeight + getHeaderHeight * 1.5
                    : SCREEN_HEIGHT - getHeaderHeight + getHeaderHeight * 2.5,
              }}
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
              <DataSingleEvent
                data={route.params.params}
                borderRadius={borderRadius}
              />
              <DescriptionSingleEvent data={route.params.params} />
            </Animated.ScrollView>
          </View>
        </View>
        <Button
          // onPress={() => HandleLogin({email: isEmail, password: isPassword})}
          mode="contained"
          // disabled={authLoading || isError.Email || isError.Password}
          color={Colors.Primary}
          labelStyle={{color: Colors.OnSecondary}}
          style={styles.Button}
          disabled={
            route.params.params.Event_Jobs.length <= 0 ||
            data.status !== 'ACTIVE'
              ? true
              : false
          }
          // loading={authLoading}
        >
          {Locals.SingleEvent.Apply}
        </Button>
      </View>
    </Page>
  );
};

export default SingleEvent;
