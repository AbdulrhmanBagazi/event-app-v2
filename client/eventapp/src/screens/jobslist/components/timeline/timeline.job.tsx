import * as React from 'react';
import {View} from 'react-native';
import {Headline, IconButton} from 'react-native-paper';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.timeline';

const Timeline: React.FC<{}> = ({}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Locals} = UseI18nContext() as I18nContextType;
  const data = [];

  return (
    <View style={[styles.Container, {backgroundColor: Colors.Background}]}>
      <Headline style={styles.Headline} numberOfLines={2}>
        {Locals.Job.Timeline}
      </Headline>
      <View style={styles.TimeLineView}>
        {data.length === 0 ? (
          <IconButton
            style={styles.Icon}
            icon="timeline-alert"
            color={Colors.Surface}
            size={150}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Timeline;
