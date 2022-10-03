import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Animated, {FadeIn} from 'react-native-reanimated';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {App_Section} from '../../../../graphql/generated';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import FlatListData from '../flatlistData/flatlistData.home';
import {styles} from './styles.sections';

const SectionsHeader: React.FC<{
  data: App_Section;
  index: number;
  navigate: () => void;
}> = ({data, index, navigate}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Lang, Locals} = UseI18nContext() as I18nContextType;

  return (
    <Animated.View entering={FadeIn.duration(500).delay(100 * index)}>
      <View style={styles.SectionView}>
        <View style={styles.TitleView}>
          <Text style={[styles.SectionTitle, {color: Colors.OnBackground}]}>
            {Lang === 'en' ? data.title_en : data.title}
            <Text style={[styles.SectionSub, {color: Colors.OnBackground}]}>
              {' (' + data.count + ')'}
            </Text>
          </Text>
        </View>

        <Button
          mode="text"
          color={Colors.Secondary}
          style={styles.SectionMore}
          onPress={navigate}>
          {Locals.NavigationButton.Events}
        </Button>
      </View>
      <FlatListData app_sectionId={data.id} />
    </Animated.View>
  );
};

export default SectionsHeader;
