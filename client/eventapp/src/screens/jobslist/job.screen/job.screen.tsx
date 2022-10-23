import React from 'react';
import Page from '../../../layout/page';
import {useHeaderHeight} from '@react-navigation/elements';
import {Platform, View} from 'react-native';
import {I18nContextType, ParamList, ThemeContextType} from '../../../typs';
import {styles} from './styles.job';
import {RouteProp, useRoute} from '@react-navigation/native';
import {UseI18nContext} from '../../../context/I18n/i18n.context';
import EventData from './../components/job/eventdata.job';
import {UseThemeContext} from '../../../context/theme/themeToggle.context';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import HeaderSingleEvent from '../components/job/HeaderSingleEvent/header.singleEvent';
import {Caption, Headline, Paragraph} from 'react-native-paper';
import countries from 'i18n-iso-countries';
import moment from 'moment';
import Timeline from '../components/timeline/timeline.job';
import {SCREEN_HEIGHT} from '../../../layout/screenDimensions';

const Job = () => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;
  const route = useRoute<RouteProp<ParamList, 'Job'>>();
  const data = route.params;
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

  return (
    <Page paddingHorizontal={0}>
      <View style={[styles.Container, {backgroundColor: Colors.Background}]}>
        <HeaderSingleEvent data={data} style={spaceColor} />
        <View
          style={[
            styles.Scroll,
            {top: getHeaderHeight, height: SCREEN_HEIGHT},
          ]}>
          <Animated.FlatList
            onScroll={onScroll}
            ListHeaderComponent={
              <View>
                <View
                  style={{
                    height:
                      Platform.OS === 'ios'
                        ? getHeaderHeight * 1.5
                        : getHeaderHeight * 2.5,
                  }}
                />
                <EventData data={data} />

                <View
                  style={[
                    styles.TextView,
                    {backgroundColor: Colors.Background},
                  ]}>
                  <Headline style={styles.Headline} numberOfLines={2}>
                    {Locals.Job.employeeInfo}
                  </Headline>
                </View>
                <View
                  style={[
                    styles.userInfoView,
                    {backgroundColor: Colors.Background},
                  ]}>
                  <View style={styles.userInfo}>
                    <Paragraph>{Locals.Job.name}</Paragraph>
                    <Caption>{data.name}</Caption>
                  </View>
                  <View style={styles.userInfo}>
                    <Paragraph>{Locals.Job.nationality}</Paragraph>
                    <Caption>
                      {countries.getName(data.nationality, Lang)}
                    </Caption>
                  </View>
                  <View style={styles.userInfo}>
                    <Paragraph>{Locals.Job.nationalID}</Paragraph>
                    <Caption>{data.nationalID}</Caption>
                  </View>
                  <View style={styles.userInfo}>
                    <Paragraph>{Locals.Job.gender}</Paragraph>
                    <Caption>
                      {data.gender === 'male'
                        ? Locals.Job.male
                        : Locals.Job.female}
                    </Caption>
                  </View>
                  <View style={styles.userInfo}>
                    <Paragraph>{Locals.Job.dateOfBirth}</Paragraph>
                    <Caption>
                      {moment(data.dateOfBirth).format('YYYY-MM-DD')}
                    </Caption>
                  </View>
                </View>
              </View>
            }
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            ListEmptyComponent={<Timeline />}
            renderItem={() => {
              return <>s</>;
            }}
            data={[]}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      </View>
    </Page>
  );
};

export default Job;
