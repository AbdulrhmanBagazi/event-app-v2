import React from 'react';
import {View} from 'react-native';
import {
  Headline,
  Subheading,
  Text,
  IconButton,
  Badge,
} from 'react-native-paper';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {Events} from '../../../../graphql/generated';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.data.singleEvent';
import moment from 'moment';
import Animated, {StyleProps} from 'react-native-reanimated';

const DataSingleEvent: React.FC<{
  data: Events;
  borderRadius: StyleProps;
}> = ({data, borderRadius}) => {
  const {Colors, isDarkMode} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;
  const jobs = data.Event_Jobs;
  const min = Math.min(...jobs.map(item => Number(item.rate)));
  const max = Math.max(...jobs.map(item => Number(item.rate)));
  const result = jobs.find(obj => {
    return obj.rate === min;
  });

  return (
    <Animated.View
      style={[
        borderRadius,
        {
          backgroundColor: isDarkMode ? Colors.Surface : Colors.Background,
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.TextView}>
          <Badge
            style={[
              styles.CardBadge,
              {
                backgroundColor:
                  data.status === 'SOON'
                    ? Colors.Primary
                    : data.status === 'ACTIVE'
                    ? Colors.Secondary
                    : Colors.Surface,
                color:
                  data.status === 'SOON'
                    ? Colors.OnPrimary
                    : data.status === 'ACTIVE'
                    ? Colors.OnSecondary
                    : Colors.OnSurface,
              },
            ]}>
            {Locals.Jobs[data.status]}
          </Badge>
          <Headline>{Lang === 'en' ? data.title_en : data.title}</Headline>
          <Subheading style={styles.Subheading}>
            {Lang === 'en' ? data.content_en : data.content}
          </Subheading>
        </View>

        <View style={styles.Row}>
          <View style={styles.ItemSmall}>
            <IconButton icon="map" color={Colors.Secondary} size={20} />
            <Text>
              {Lang === 'en' ? data.Location?.title_en : data.Location?.title}
            </Text>
          </View>

          <View style={styles.Item}>
            <IconButton icon="calendar" color={Colors.Secondary} size={20} />
            <Text>{moment(new Date(data.createdAt)).format('YYYY-MM-DD')}</Text>
          </View>
        </View>

        <View style={styles.Row}>
          <View style={styles.ItemSmall}>
            <IconButton icon="briefcase" color={Colors.Secondary} size={20} />
            <Text>{data.Event_Jobs?.length}</Text>
          </View>
          <View style={styles.Item}>
            <IconButton
              icon="cash-multiple"
              color={Colors.Secondary}
              size={20}
            />
            <Text>
              {data.Event_Jobs.length === 1
                ? min + ' '
                : data.Event_Jobs.length > 1
                ? min + ' - ' + max + ' '
                : '------------'}
              {data.Event_Jobs.length >= 1
                ? result?.rate_type === 'DAY'
                  ? Locals.SingleEvent.SARday
                  : Locals.SingleEvent.SARmonth
                : null}
            </Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default DataSingleEvent;
