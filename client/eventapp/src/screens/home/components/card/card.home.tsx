import * as React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../../../typs';
import {styles} from './styles.card.home';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';

const MyCard: React.FC<{
  name: String | null | undefined;
  changeWidth: boolean;
}> = ({name, changeWidth}) => {
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <Animated.View
      style={{width: changeWidth ? SCREEN_WIDTH - 20 : SCREEN_WIDTH - 10}}
      entering={FadeInRight.duration(500).delay(200)}>
      <Card style={[styles.cardContainer]} mode="elevated">
        <Card.Cover
          source={{uri: 'https://picsum.photos/700'}}
          style={{
            backgroundColor: Colors.Surface,
          }}
        />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
        <Card.Actions style={styles.CardAction}>
          <Paragraph style={styles.CardPrice}>٢٠٠ ريال/اليوم</Paragraph>
        </Card.Actions>
      </Card>
    </Animated.View>
  );
};

export default MyCard;
