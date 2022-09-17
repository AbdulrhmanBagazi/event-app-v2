import React, {
  createContext,
  useContext,
  ReactElement,
  useState,
  useEffect,
} from 'react';
import {Snackbar} from 'react-native-paper';
import {AuthenticatedTypes, ErrorContextType} from '../../typs';
import {useAuth} from '../auth/auth.context';

export const ErrorContext = createContext<ErrorContextType>({
  ThrowError: () => {},
});

export const ErrorProvider = ({
  children,
}: {
  children: ReactElement;
}): JSX.Element => {
  const {authLoading} = useAuth() as AuthenticatedTypes;
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const onDismissSnackBar = () => setVisible(false);
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
        onDismiss={onDismissSnackBar}
        duration={1500}
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

export const useError = () => useContext<ErrorContextType>(ErrorContext);
