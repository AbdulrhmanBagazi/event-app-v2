import * as React from 'react';
import {Banner} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import AnimatedView from '../../../../layout/animatedView';
import {ThemeContextType} from '../../../../typs';
import {StyleSheet} from 'react-native';

const UpdateProfileBanner = () => {
  const [visible, setVisible] = React.useState(true);
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <AnimatedView Color="Surface" style={styles.View}>
      <Banner
        visible={visible}
        style={styles.banner}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
            color: Colors.Secondary,
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
            color: Colors.Secondary,
          },
        ]}
        icon={({size}) => (
          <Icon name="account-alert" size={size} color={Colors.Primary} />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
    </AnimatedView>
  );
};

export default UpdateProfileBanner;

export const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  View: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
