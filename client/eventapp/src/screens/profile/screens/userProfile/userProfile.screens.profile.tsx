import React from 'react';
import {AuthenticatedTypes, RootStackParamList} from '../../../../typs';
import {useAuth} from '../../../../context/auth/auth.context';
import {View} from 'react-native';
import CustomText from '../../../../components/customText/customText';
import AddUserProfile from './addUserProfile.screens.profile';
import CustomHeaderBackButton from '../../../../components/customHeaderBackButton/customHeaderBackButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

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
    return (
      <View>
        <CustomText
          text="yes profile"
          fontWeight="normal"
          Color={'OnBackground'}
        />
      </View>
    );
  }

  return <AddUserProfile />;
};

export default UserProfile;
