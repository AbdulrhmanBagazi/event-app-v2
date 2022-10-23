import React from 'react';
import {View} from 'react-native';
import {
  Headline,
  Text,
  IconButton,
  Subheading,
  Badge,
} from 'react-native-paper';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {Applicants} from '../../../../graphql/generated';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.eventdata';
import I18nTime from '../../../apply/components/I18nTime.apply';

const EventData: React.FC<{
  data: Applicants;
}> = ({data}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;

  return (
    <View
      style={{
        backgroundColor: Colors.Background,
      }}>
      <View style={styles.container}>
        <View style={styles.TextView}>
          <Headline
            style={[styles.Headline, {color: Colors.OnBackground}]}
            numberOfLines={2}>
            {Lang === 'en' ? data.event.title_en : data.event.title}
          </Headline>
          <Subheading style={styles.Subheading}>
            {Lang === 'en' ? data.event.content_en : data.event.content}
          </Subheading>
        </View>

        <View style={styles.Row}>
          <View style={styles.Item}>
            <IconButton icon="chart-donut" color={Colors.Primary} size={20} />
            <Badge
              style={[
                styles.CardBadge,
                {
                  backgroundColor: Colors.Secondary,
                  color: Colors.OnSecondary,
                },
              ]}>
              {Locals[data.status]}
            </Badge>
          </View>

          <View style={styles.Item}>
            <IconButton
              icon="clock-time-one-outline"
              color={Colors.Primary}
              size={20}
            />
            <Text>
              <I18nTime time={data.shift.start_time} Language={Lang} />
            </Text>
            <IconButton
              icon={Lang === 'en' ? 'arrow-right' : 'arrow-left'}
              color={Colors.Primary}
              size={20}
            />
            <Text>
              <I18nTime time={data.shift.end_time} Language={Lang} />
            </Text>
          </View>

          <View style={styles.Item}>
            <IconButton icon="briefcase" color={Colors.Primary} size={20} />
            <Text>{Lang === 'en' ? data.job.title_en : data.job.title}</Text>
          </View>
          <View style={styles.Item}>
            <IconButton icon="cash-multiple" color={Colors.Primary} size={20} />
            <Text>
              {data.job.rate}
              {data.job.rate_type === 'DAY'
                ? Locals.SingleEvent.SARday
                : Locals.SingleEvent.SARmonth}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventData;
