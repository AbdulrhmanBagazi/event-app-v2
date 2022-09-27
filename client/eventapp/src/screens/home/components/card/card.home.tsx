import * as React from 'react';
import {
  Card,
  Paragraph,
  Avatar,
  Badge,
  Title,
  Button,
} from 'react-native-paper';
import moment from 'moment';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../../../typs';
import {styles} from './styles.card.home';
import Animated, {FadeIn} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';
import {Image, View} from 'react-native';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {Events} from '../../../../graphql/generated';
import Logo from './logo';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const MyCard: React.FC<{
  changeWidth: boolean;
  data: Events;
  index: number;
}> = ({changeWidth, data, index}) => {
  const {Colors, Theme, isDarkMode} = useThemeContext() as ThemeContextType;
  const {Lang, Locals} = useI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <Animated.View
      style={{
        width: changeWidth ? SCREEN_WIDTH - 20 : SCREEN_WIDTH,
      }}
      entering={FadeIn.duration(700).delay(100 * index)}>
      <Card
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.cardContainer, {borderWidth: isDarkMode ? 0 : 1}]}
        mode="outlined"
        onPress={() =>
          navigate('Event', {
            params: {
              id: data.id,
              title: Lang === 'en' ? data.title_en : data.title,
              image: data.image_url,
              companyLogo: data.companyLogo,
            },
          })
        }>
        <View
          style={[styles.MainCardView, {backgroundColor: Theme.dark.Surface}]}>
          <Card.Cover
            source={{
              uri: data.image_url,
            }}
            style={[
              styles.TopCardImage,
              {
                backgroundColor: Colors.Surface,
              },
            ]}
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
          <View>
            <Button icon="calendar" mode="text" color={Colors.OnSurface}>
              {moment(new Date(data.createdAt)).format('YYYY-MM-DD')}
            </Button>
          </View>

          <View>
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
          </View>
        </Card.Actions>
      </Card>
    </Animated.View>
  );
};

export default MyCard;
