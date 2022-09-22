import React from 'react';
import {AuthenticatedTypes, RootStackParamList} from '../../../../typs';
import {useAuth} from '../../../../context/auth/auth.context';
import AddUserProfile from './addUserProfile.screens.profile';
import CustomHeaderBackButton from '../../../../components/customHeaderBackButton/customHeaderBackButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import UpdateUserProfile from './updateUserProfile.screens.profile';

const UserProfile = () => {
  const {user, GraphQlLoading} = useAuth() as AuthenticatedTypes;
  const {setOptions, pop} =
    useNavigation<StackNavigationProp<RootStackParamList>>();

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

  if (user?.Profile) {
    return <UpdateUserProfile />;
  }

  return <AddUserProfile />;
};

export default UserProfile;
