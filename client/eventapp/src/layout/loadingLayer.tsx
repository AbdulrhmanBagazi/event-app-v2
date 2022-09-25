import * as React from 'react';
import {View} from 'react-native';
import {Modal, Portal, ActivityIndicator} from 'react-native-paper';
import {useAuth} from '../context/auth/auth.context';
import {useThemeContext} from '../context/theme/themeToggle.context';
import {AuthenticatedTypes, ThemeContextType} from '../typs';
import {styles} from './styles.layout';

const LoadingLayer = () => {
  const {GraphQlLoading} = useAuth() as AuthenticatedTypes;
  const {Colors} = useThemeContext() as ThemeContextType;

  return (
    <Portal>
      <Modal
        dismissable={false}
        visible={GraphQlLoading}
        theme={{
          colors: {
            backdrop: 'rgba(0,0,0,0.25)',
          },
        }}
        contentContainerStyle={[
          styles.Modal,
          {backgroundColor: Colors.Surface},
        ]}>
        <View style={styles.loadingView}>
          <ActivityIndicator animating={true} color={Colors.Primary} />
        </View>
      </Modal>
    </Portal>
  );
};

export default LoadingLayer;
