import React from 'react';
import {LoadingScreen} from './routes';
import {I18nContextType, RoutesType} from '../typs';
import {useI18nContext} from '../context/I18n/i18n.context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Loading = createNativeStackNavigator();
const LoadingStack = () => {
  const {Locals} = useI18nContext() as I18nContextType;

  return (
    <Loading.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {LoadingScreen.map((route: RoutesType, i: number) => (
        <Loading.Screen
          name={route.name}
          options={{
            headerShown: false,
          }}
          key={i}>
          {props => <route.component {...props} i18n={Locals} />}
        </Loading.Screen>
      ))}
    </Loading.Navigator>
  );
};

export default LoadingStack;
