import * as React from 'react';
import {
  Card,
  Paragraph,
  Avatar,
  Badge,
  Title,
  Text,
  IconButton,
} from 'react-native-paper';
import moment from 'moment';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../../../typs';
import {styles} from './styles.card.home';
import Animated, {FadeIn} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';
import {Image, View} from 'react-native';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {Events} from '../../../../graphql/generated';
import Logo from './logo';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const MyCard: React.FC<{
  changeWidth: boolean;
  data: Events;
  index: number;
}> = ({changeWidth, data, index}) => {
  const {Colors, Theme} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Animated.View
      style={{
        width: changeWidth ? SCREEN_WIDTH - 20 : SCREEN_WIDTH,
      }}
      entering={FadeIn.duration(700).delay(100 * index)}>
      <Card
        style={[styles.cardContainer, {backgroundColor: Colors.Surface}]}
        mode="outlined"
        onPress={() =>
          navigate('Event', {
            params: data,
          })
        }>
        <View
          style={[styles.MainCardView, {backgroundColor: Theme.dark.Surface}]}>
          <Card.Cover
            source={{
              uri: data.image_url,
            }}
            style={styles.TopCardImage}
          />
          <View style={styles.TopCardImageLayer}>
            <Avatar.Image
              size={60}
              style={[
                styles.TopCardAvatart,
                {
                  backgroundColor: Colors.Surface,
                },
              ]}
              source={() =>
                data?.companyLogo ? (
                  <Image
                    source={{
                      uri: data?.companyLogo,
                    }}
                    resizeMode="contain"
                    style={styles.Image}
                  />
                ) : (
                  <Logo width={45} height={45} />
                )
              }
            />
          </View>
          <View style={styles.TopCardTextLayer}>
            <Title style={styles.CardText}>
              {Lang === 'en' ? data.title_en : data.title}
            </Title>
            <Paragraph style={styles.CardText}>
              {Lang === 'en' ? data.content_en : data.content}
            </Paragraph>
          </View>
        </View>

        <Card.Actions style={styles.CardAction}>
          <View style={styles.dataView}>
            <View style={styles.Item}>
              <IconButton icon="map" color={Colors.Primary} size={14} />
              <Text>
                {Lang === 'en' ? data.Location?.title_en : data.Location?.title}{' '}
              </Text>
            </View>
            <View style={styles.Item}>
              <IconButton icon="calendar" color={Colors.Primary} size={14} />
              <Text>
                {moment(new Date(data.createdAt)).format('YYYY-MM-DD')}
              </Text>
            </View>
          </View>

          <View style={styles.dataView}>
            <Badge
              style={[
                styles.CardBadge,
                styles.Font,
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
          </View>
        </Card.Actions>
      </Card>
    </Animated.View>
  );
};

export default MyCard;
