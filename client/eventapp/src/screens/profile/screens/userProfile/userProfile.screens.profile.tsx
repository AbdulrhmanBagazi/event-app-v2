import React from 'react';
import {
  AuthenticatedTypes,
  RootStackParamList,
  ThemeContextType,
} from '../../../../typs';
import {useAuth} from '../../../../context/auth/auth.context';
import AddUserProfile from './addUserProfile.screens.profile';
import CustomHeaderBackButton from '../../../../components/customHeaderBackButton/customHeaderBackButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import UpdateUserProfile from './updateUserProfile.screens.profile';
import {styles} from './styles.userProfile';
import {ActivityIndicator} from 'react-native-paper';
import {useThemeContext} from '../../../../context/theme/themeToggle.context';
import {View} from 'react-native';

const UserProfile = () => {
  const {user, GraphQlLoading} = useAuth() as AuthenticatedTypes;
  const {setOptions, pop} =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const {Colors} = useThemeContext() as ThemeContextType;

  React.useLayoutEffect(() => {
    return setOptions({
      headerLeft: () => (
        <CustomHeaderBackButton
          disabled={GraphQlLoading}
          onPress={() => pop()}
        />
      ),
    });
  }, [setOptions, GraphQlLoading, pop]);

  if (GraphQlLoading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator animating={true} color={Colors.Primary} />
      </View>
    );
  }

  if (user?.Profile) {
    return <UpdateUserProfile />;
  }

  return <AddUserProfile />;
};

export default UserProfile;
