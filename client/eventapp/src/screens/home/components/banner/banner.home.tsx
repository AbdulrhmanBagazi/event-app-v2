import * as React from 'react';
import {View} from 'react-native';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import Loading from '../../../../layout/loading';
import {ThemeContextType} from '../../../../typs';

///"https://source.unsplash.com/random/1600x900/daily"
const Banner: React.FC<{}> = ({}) => {
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 200,
        backgroundColor: Colors.Surface,
        marginHorizontal: 5,
        borderRadius: 2.5,
      }}>
      <Loading />
    </View>
  );
};

export default Banner;
