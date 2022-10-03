import React from 'react';
import {AuthenticatedTypes} from '../../../../typs';
import {UseAuth} from '../../../../context/auth/auth.context';
import AddUserProfile from './addUserProfile.screens.profile';
import UpdateUserProfile from './updateUserProfile.screens.profile';

const UserProfile = () => {
  const {user} = UseAuth() as AuthenticatedTypes;

  if (user?.Profile) {
    return <UpdateUserProfile />;
  }

  return <AddUserProfile />;
};

export default UserProfile;
