import React, {
  createContext,
  useContext,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import {Snackbar} from 'react-native-paper';
import {AuthenticatedTypes, ErrorContextType} from '../../typs';
import {UseAuth} from '../auth/auth.context';

export const ErrorContext = createContext<ErrorContextType>({
  ThrowError: () => {},
});

export const ErrorProvider = ({
  children,
}: {
  children: ReactElement;
}): JSX.Element => {
  const {authLoading} = UseAuth() as AuthenticatedTypes;
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const OnDismissSnackBar = () => setVisible(false);
  const ThrowError = async (arg0: string) => {
    setMsg(arg0);
    setVisible(true);
  };

  useEffect(() => {
    if (authLoading) {
      setVisible(false);
    }
  }, [authLoading]);

  return (
    <ErrorContext.Provider
      value={{
        ThrowError,
      }}>
      {children}
      <Snackbar
        visible={visible}
        onDismiss={OnDismissSnackBar}
        duration={1500}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginBottom: 20}}
        // action={{
        //   label: 'X',
        //   onPress: () => setVisible(false),
        // }}
      >
        {msg}
      </Snackbar>
    </ErrorContext.Provider>
  );
};

export const UseError = () => useContext<ErrorContextType>(ErrorContext);
