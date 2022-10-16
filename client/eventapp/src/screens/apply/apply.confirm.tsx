import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import {
  Caption,
  Checkbox,
  Headline,
  Button,
  List,
  IconButton,
  Text,
} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {I18nContextType, ThemeContextType, UserUpdateTypes} from '../../typs';
import {UseI18nContext} from '../../context/I18n/i18n.context';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {UseAuth} from '../../context/auth/auth.context';
import {styles} from './styles.apply';
import countries from 'i18n-iso-countries';
import moment from 'moment';
import I18nTime from './components/I18nTime.apply';

const ApplyConfirm: React.FC<{
  apply: () => void;
  loading: boolean;
  back: () => void;
  start_time: string;
  end_time: string;
  job: {
    id: string | null;
    rate: number | null;
    rate_type: string | null;
    title: string | null;
    title_en: string | null;
  };
}> = ({apply, loading, back, start_time, end_time, job}) => {
  const {Locals, Lang} = UseI18nContext() as I18nContextType;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {user} = UseAuth() as UserUpdateTypes;
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Headline>{Locals.Apply.Confirm_Information}</Headline>

        <List.Item
          title={Locals.ReviewProfile.name}
          description={user.Profile.firstName + ' ' + user.Profile.lastName}
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStylefirst}
        />

        <List.Item
          title={Locals.ReviewProfile.nationality}
          description={countries.getName(user.Profile.nationality, Lang)}
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <List.Item
          title={Locals.ReviewProfile.nationalID}
          description={user.Profile.nationalID}
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <List.Item
          title={Locals.ReviewProfile.gender}
          description={
            user.Profile.gender === 'male'
              ? Locals.ReviewProfile.male
              : Locals.ReviewProfile.female
          }
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <List.Item
          title={Locals.ReviewProfile.dateOfBirth}
          description={moment(user.Profile.dateOfBirth).format('YYYY-MM-DD')}
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <List.Item
          title={Locals.ReviewProfile.job}
          description={Lang === 'en' ? job.title_en : job.title}
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <List.Item
          title={Locals.ReviewProfile.salary}
          description={
            job.rate
              ? job.rate + ' ' + Locals.SingleEvent.SARday
              : '------------'
          }
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <List.Item
          title={Locals.ReviewProfile.shift}
          description={props => (
            <View style={styles.shiftItem}>
              <Text style={{color: props.color}}>
                {start_time ? (
                  <I18nTime time={start_time} Language={Lang} />
                ) : (
                  '------------'
                )}
              </Text>
              <IconButton
                icon={Lang === 'en' ? 'arrow-right' : 'arrow-left'}
                color={props.color}
                size={20}
              />
              <Text style={{color: props.color}}>
                {end_time ? (
                  <I18nTime time={end_time} Language={Lang} />
                ) : (
                  '------------'
                )}
              </Text>
            </View>
          )}
          descriptionStyle={styles.descriptionStyle}
          style={styles.listStyle}
        />

        <View style={styles.Item}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            uncheckedColor={Colors.Secondary}
          />
          <Caption style={styles.Caption}>{Locals.Apply.Confirm}</Caption>
        </View>
      </ScrollView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginBottom: Platform.OS === 'ios' ? 40 : 20,
          backgroundColor: Colors.Background,
        }}>
        <Button
          onPress={() => apply()}
          mode="contained"
          disabled={loading || !checked}
          color={Colors.Primary}
          labelStyle={{color: Colors.OnPrimary}}>
          {Locals.Apply.Apply}
        </Button>

        <Button
          mode="text"
          disabled={loading}
          color={Colors.Secondary}
          onPress={() => back()}
          style={styles.BackButtons}>
          {Locals.Apply.back}
        </Button>
      </View>
    </>
  );
};

export default ApplyConfirm;
