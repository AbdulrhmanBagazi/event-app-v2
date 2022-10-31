import React, {createContext, useContext, useState, useEffect} from 'react';
import {I18nManager} from 'react-native';
import {I18nContextType, Languges} from '../../typs';
import {I18n_ar, I18n_en} from './locals.i18n'; //I18n_en
import {MMKVLoader} from 'react-native-mmkv-storage';
import RNRestart from 'react-native-restart';
import OneSignal from 'react-native-onesignal';

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [isLocals, setLocals] = useState<typeof I18n_ar | typeof I18n_en>(
    I18n_en,
  );
  const [isLang, setLang] = useState('en');
  const MMKV = new MMKVLoader().initialize();
  I18nManager.allowRTL(true);

  const ToggleI18n = async (languges: Languges, firstTime: Boolean) => {
    if (firstTime) {
      if (languges === 'en') {
        await MMKV.setStringAsync('Lang', 'en');
        OneSignal.setLanguage('en');
        I18nManager.forceRTL(false);
        I18nManager.allowRTL(false);

        return RNRestart.Restart();
      }

      await MMKV.setStringAsync('Lang', 'ar');
      OneSignal.setLanguage('ar');
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);

      return RNRestart.Restart();
    }

    if (languges === isLang) {
      return;
    }
    if (isLang === 'en') {
      await MMKV.setStringAsync('Lang', 'ar');
      OneSignal.setLanguage('ar');
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);

      return RNRestart.Restart();
    }

    await MMKV.setStringAsync('Lang', 'en');
    OneSignal.setLanguage('en');
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);

    return RNRestart.Restart();
  };

  useEffect(() => {
    const getLang = async () => {
      const Lang = await MMKV.getStringAsync('Lang');

      if (Lang === 'en') {
        setLang('en');
        OneSignal.setLanguage('en');
        return setLocals(I18n_en);
      }

      setLang('ar');
      OneSignal.setLanguage('ar');
      return setLocals(I18n_ar);
    };

    getLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <I18nContext.Provider value={{ToggleI18n, Locals: isLocals, Lang: isLang}}>
      {children}
    </I18nContext.Provider>
  );
};

export const UseI18nContext = () => useContext(I18nContext);
