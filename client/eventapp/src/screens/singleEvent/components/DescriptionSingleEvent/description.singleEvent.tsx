import React from 'react';
import {View} from 'react-native';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {Events} from '../../../../graphql/generated';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.description.singleEvent';
import RenderHtml from 'react-native-render-html';
import {SCREEN_WIDTH} from '../../../../layout/screenDimensions';
import {Headline} from 'react-native-paper';

const DescriptionSingleEvent: React.FC<{data: Events}> = ({data}) => {
  const {Colors, isDarkMode} = UseThemeContext() as ThemeContextType;
  const {Lang} = UseI18nContext() as I18nContextType;
  const DataLocal = Lang === 'en' ? data.details_en : data.details;

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.Surface : Colors.Background,
      }}>
      {DataLocal.map((val: {title: string; content: string}, i: number) => {
        return (
          <View style={styles.container} key={i}>
            <Headline>{val.title}</Headline>
            <View style={styles.content}>
              <RenderHtml
                // eslint-disable-next-line react-native/no-inline-styles
                baseStyle={{color: Colors.OnBackground, textAlign: 'left'}}
                source={{html: val.content}}
                contentWidth={SCREEN_WIDTH}
                tagsStyles={{
                  p: {margin: 0, padding: 0},
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default DescriptionSingleEvent;
