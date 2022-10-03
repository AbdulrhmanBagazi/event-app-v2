import * as React from 'react';
import {View} from 'react-native';
import {Modal, Portal, ActivityIndicator} from 'react-native-paper';
import {UseAuth} from '../context/auth/auth.context';
import {UseThemeContext} from '../context/theme/themeToggle.context';
import {AuthenticatedTypes, ThemeContextType} from '../typs';
import {styles} from './styles.layout';

const LoadingLayer = () => {
  const {GraphQlLoading, authLoading} = UseAuth() as AuthenticatedTypes;
  const {Colors} = UseThemeContext() as ThemeContextType;

  return (
    <Portal>
      <Modal
        dismissable={false}
        visible={GraphQlLoading || authLoading}
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
