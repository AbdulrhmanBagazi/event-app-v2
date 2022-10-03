import React from 'react';
import {View} from 'react-native';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {Events} from '../../../../graphql/generated';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.description.singleEvent';
import CustomText from '../../../../components/customText/customText';

const DescriptionSingleEvent: React.FC<{data: Events}> = ({}) => {
  const {Colors, isDarkMode} = UseThemeContext() as ThemeContextType;
  const {Locals} = UseI18nContext() as I18nContextType;

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.Surface : Colors.Background,
      }}>
      <View style={styles.container}>
        <CustomText
          style={styles.title}
          text={Locals.SingleEvent.Details}
          fontWeight="normal"
          Color={'OnSurface'}
        />
        <CustomText
          style={styles.text}
          text="Tattooed cliche wayfarers jianbing letterpress jean shorts. Vice tumeric enamel pin lumbersexual lomo. Before they sold out pour-over affogato kogi vice, sustainable man bun aesthetic bushwick chicharrones selfies health goth williamsburg."
          fontWeight="300"
          Color={'OnSurface'}
        />
      </View>
    </View>
  );
};

export default DescriptionSingleEvent;
