import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useI18nContext} from '../../../../context/I18n/i18n.context';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {Sections} from '../../../../graphql/generated';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import FlatListData from '../flatlistData/flatlistData.home';
import {styles} from './styles.sections';

const SectionsHeader: React.FC<{
  data: Sections;
  index: number;
  navigate: () => void;
}> = ({data, index, navigate}) => {
  const {Colors} = useThemeContext() as ThemeContextType;
  const {Lang, Locals} = useI18nContext() as I18nContextType;

  return (
    <Animated.View entering={FadeIn.duration(500).delay(100 * index)}>
      <View style={styles.SectionView}>
        <View style={styles.TitleView}>
          <Text style={[styles.SectionTitle, {color: Colors.OnBackground}]}>
            {Lang === 'en' ? data.title_en : data.title}
          </Text>
          <Text style={[styles.SectionSub, {color: Colors.OnBackground}]}>
            {Locals.Home.Jobs + ' ' + data.eventCount}
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
      <FlatListData sectionId={data.id} />
    </Animated.View>
  );
};

export default SectionsHeader;
