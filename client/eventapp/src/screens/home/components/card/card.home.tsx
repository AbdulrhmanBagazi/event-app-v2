import * as React from 'react';
import {Card, Title, Paragraph, Avatar} from 'react-native-paper';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.card.home';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';
import {Image, View} from 'react-native';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {Events} from '../../../../graphql/generated';
import Logo from './logo';

const MyCard: React.FC<{
  changeWidth: boolean;
  data: Events;
}> = ({changeWidth, data}) => {
  const {Colors, Theme} = useThemeContext() as ThemeContextType;
  const {Lang} = useI18nContext() as I18nContextType;

  return (
    <Animated.View
      style={{width: changeWidth ? SCREEN_WIDTH - 20 : SCREEN_WIDTH}}
      entering={FadeInRight.duration(500).delay(200)}>
      <Card style={[styles.cardContainer]} mode="elevated">
        <View
          style={[styles.TopCardLayer, {backgroundColor: Theme.dark.Surface}]}>
          <Card.Cover
            source={{
              uri: data.image_url
                ? data.image_url
                : 'https://i.im.ge/2022/09/17/12udB4.one.png',
            }}
            style={[
              styles.TopCardImage,
              {
                backgroundColor: Colors.Primary,
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
                  <Logo />
                )
              }
            />
          </View>
        </View>

        <Card.Content>
          <Title>{Lang === 'en' ? data.title_en : data.title}</Title>
          <Paragraph>
            {Lang === 'en' ? data.content_en : data.content}
          </Paragraph>
        </Card.Content>
      </Card>
    </Animated.View>
  );
};

export default MyCard;
