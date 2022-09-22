import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Button, Text} from 'react-native-paper';
import {Image} from 'react-native';
import {styles} from './styles.MyGoogleButton';
import {AuthenticatedTypes} from '../../typs';
import {useAuth} from '../../context/auth/auth.context';

GoogleSignin.configure({
  webClientId:
    '672593561259-l2tp2rgk8oafu4lkglpn6ipdgi9igqnj.apps.googleusercontent.com',
  iosClientId:
    '672593561259-b3sq8r5s3h5ekmra09au2rktuto7lpng.apps.googleusercontent.com',
  // offlineAccess: false,
});

const MGoogleButton: React.FC<{text: String}> = ({text}) => {
  const {authLoading, GoogleSignIn} = useAuth() as AuthenticatedTypes;

  const Sign = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      return GoogleSignIn(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //user cancelled the login flow
        // console.log('user cancelled the login flow');
        return;
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        // console.log('operation (e.g. sign in) is in progress already');
        return;
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        // console.log('play services not available or outdated');
        return;
      } else {
        // some other error happened
        // console.log(error);
        return;
      }
    }
  };

  return (
    <Button
      onPress={() => Sign()}
      style={styles.customButton}
      contentStyle={styles.customButtonContainer}
      labelStyle={styles.label}
      // color={isDarkMode ? '#FFFFFF' : '#4285F4'}
      color="#FFFFFF"
      mode="contained"
      uppercase={false}
      disabled={authLoading}
      icon={({size}) => (
        <Image
          source={require('../../assets/google-logo.png')}
          style={{
            width: size + 5,
            height: size + 5,
          }}
        />
      )}>
      <Text style={styles.label}>{text}</Text>
    </Button>
  );
};

export default MGoogleButton;
