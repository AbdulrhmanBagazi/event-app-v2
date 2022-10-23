import * as React from 'react';
import {Card, Badge, Text, IconButton} from 'react-native-paper';
import {styles} from './styles.card.joblist';
import Animated, {FadeIn} from 'react-native-reanimated';
import {View} from 'react-native';
import {UseThemeContext} from '../../../context/theme/themeToggle.context';
import {I18nContextType, ThemeContextType} from '../../../typs';
import {UseI18nContext} from '../../../context/I18n/i18n.context';
import {SCREEN_WIDTH} from '../../../layout/screenDimensions';
import {Applicants} from '../../../graphql/generated';
import I18nTime from '../../apply/components/I18nTime.apply';

const MyCardJoblist: React.FC<{
  changeWidth: boolean;
  data: Applicants;
  index: number;
  navigate: () => void;
}> = ({changeWidth, data, index, navigate}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;

  return (
    <Animated.View
      style={{
        width: changeWidth ? SCREEN_WIDTH - 20 : SCREEN_WIDTH,
      }}
      entering={FadeIn.duration(700).delay(100 * index)}>
      <Card
        style={[styles.cardContainer, {backgroundColor: Colors.Surface}]}
        mode="outlined"
        onPress={navigate}>
        <Card.Title
          title={Lang === 'en' ? data.event?.title_en : data.event?.title}
          subtitle={
            Lang === 'en' ? data.event?.content_en : data.event?.content
          }
          right={props => (
            <Badge
              size={props.size}
              style={[
                styles.cardRightIcon,
                {
                  backgroundColor: Colors.Secondary,
                  color: Colors.OnSecondary,
                },
              ]}>
              {Locals[data.status]}
            </Badge>
          )}
        />

        <Card.Actions style={styles.CardAction}>
          <View style={styles.Item}>
            <IconButton icon="briefcase" color={Colors.Primary} size={14} />
            <Text>{Lang === 'en' ? data.job?.title_en : data.job?.title}</Text>
          </View>
          <View style={styles.Item}>
            <IconButton
              icon="clock-time-one-outline"
              color={Colors.Primary}
              size={14}
            />
            <Text>
              <I18nTime time={data.shift.start_time} Language={Lang} />
            </Text>
            <IconButton
              icon={Lang === 'en' ? 'arrow-right' : 'arrow-left'}
              color={Colors.Primary}
              size={14}
            />
            <Text>
              <I18nTime time={data.shift.end_time} Language={Lang} />
            </Text>
          </View>
          <View style={styles.Item}>
            <IconButton icon="cash-multiple" color={Colors.Primary} size={14} />
            <Text>
              {data.job.rate}{' '}
              {data.job.rate_type === 'DAY'
                ? Locals.SingleEvent.SARday
                : Locals.SingleEvent.SARmonth}
            </Text>
          </View>
        </Card.Actions>
      </Card>
    </Animated.View>
  );
};

export default MyCardJoblist;
