import React from 'react';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {ThemeContextType} from '../../typs';
import {View} from 'react-native';
import {styles} from './styles.reloadButton';
import {IconButton} from 'react-native-paper';

const ReloadButton: React.FC<{
  Refetch: () => void;
}> = ({Refetch}) => {
  const {Colors} = UseThemeContext() as ThemeContextType;

  return (
    <View style={styles.ErrorView}>
      <IconButton
        icon="reload"
        onPress={Refetch}
        style={{
          backgroundColor: Colors.Primary,
        }}
        size={40}
      />
    </View>
  );
};

export default ReloadButton;
