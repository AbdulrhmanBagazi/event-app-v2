import React, {useEffect, useState} from 'react';
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

const DataSingleEvent: React.FC<{
  data: Events;
}> = ({data}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;
  const jobs = data.Event_Jobs;
  const min = Math.min(...jobs.map(item => Number(item.rate)));
  const max = Math.max(...jobs.map(item => Number(item.rate)));
  const result = jobs.find(obj => {
    return obj.rate === min;
  });
  const [initalDay, setinitalDay] = useState<
    {first: string; last: string} | undefined
  >(undefined);

  useEffect(() => {
    const mydays = data.eventcalendar;
    const sort = mydays.sort((a: string, b: string) => {
      const date1 = new Date(a) as any;
      const date2 = new Date(b) as any;

      return date1 - date2;
    });

    if (sort.length >= 1) {
      setinitalDay({
        first: sort[0],
        last: sort[sort.length - 1],
      });
    }
  }, [data.eventcalendar]);

  return (
    <View
      style={{
        backgroundColor: Colors.Background,
      }}>
      <View style={styles.container}>
        <View style={styles.TextView}>
          <Badge
            style={[
              styles.CardBadge,
              {
                backgroundColor: Colors.event_status[data.status],
                color: Colors.Surface,
              },
            ]}>
            {Locals.Jobs[data.status]}
          </Badge>
          <Headline style={{color: Colors.OnBackground}}>
            {Lang === 'en' ? data.title_en : data.title}
          </Headline>
          <Subheading style={styles.Subheading}>
            {Lang === 'en' ? data.content_en : data.content}
          </Subheading>
        </View>

        <View style={styles.Row}>
          <View style={styles.Item}>
            <IconButton icon="map" color={Colors.Primary} size={20} />
            <Text>
              {Lang === 'en' ? data.Location?.title_en : data.Location?.title}
            </Text>
          </View>

          <View style={styles.Item}>
            <IconButton icon="calendar" color={Colors.Primary} size={20} />
            <Text>
              {initalDay
                ? moment(new Date(initalDay.first)).format('YYYY-MM-DD')
                : '------------'}
            </Text>
          </View>
          <View style={styles.Item}>
            <IconButton icon="calendar" color={Colors.Primary} size={20} />
            <Text>
              {initalDay
                ? moment(new Date(initalDay.last)).format('YYYY-MM-DD')
                : '------------'}
            </Text>
          </View>

          <View style={styles.Item}>
            <IconButton icon="briefcase" color={Colors.Primary} size={20} />
            <Text>{data.Event_Jobs?.length} </Text>
          </View>
          <View style={styles.Item}>
            <IconButton icon="cash-multiple" color={Colors.Primary} size={20} />
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
    </View>
  );
};

export default DataSingleEvent;
