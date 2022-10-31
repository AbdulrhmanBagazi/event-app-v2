import React from 'react';
import Page from '../../layout/page';
import {useHeaderHeight} from '@react-navigation/elements';
import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import {
  Applicants_ListDocument,
  Applicants_ListQuery,
  Applicants_ListQueryVariables,
  Applicants_Status,
  InputMaybe,
  Order,
} from '../../graphql/generated';
import {
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native-gesture-handler';
import MyCardJoblist from './components/card.joblist';
import {Chip, Headline, IconButton} from 'react-native-paper';
import {UseI18nContext} from '../../context/I18n/i18n.context';
import {
  AuthenticatedTypes,
  I18nContextType,
  RootStackParamList,
  ThemeContextType,
} from '../../typs';
import {styles} from './styles.joblist';
import Loading from '../../layout/loading';
import {UseThemeContext} from '../../context/theme/themeToggle.context';
import {UseAuth} from '../../context/auth/auth.context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const JobsListAuth = () => {
  const {Colors} = UseThemeContext() as ThemeContextType;
  const {Locals} = UseI18nContext() as I18nContextType;
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();
  const headerHeight = useHeaderHeight();
  const [Status, setStatus] = React.useState<
    InputMaybe<Applicants_Status> | undefined
  >(undefined);
  const {data, loading, refetch} = useQuery<
    Applicants_ListQuery,
    Applicants_ListQueryVariables
  >(Applicants_ListDocument, {
    variables: {
      page: 0,
      perPage: 100,
      sortOrder: Order.Desc,
      filter: {
        status: Status,
      },
    },
  });

  const HandleStatus = (val: Applicants_Status) => {
    if (Status === val) {
      return setStatus(undefined);
    }
    return setStatus(val);
  };

  return (
    <Page paddingHorizontal={0} loadingLayer={true}>
      <View
        style={{
          height: headerHeight,
        }}
      />
      <View style={styles.RadioView}>
        <Headline style={styles.Headline}>{Locals.Status}</Headline>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Completed}
            onPress={() => HandleStatus(Applicants_Status.Completed)}>
            {Locals.COMPLETED}
          </Chip>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Approved}
            onPress={() => HandleStatus(Applicants_Status.Approved)}>
            {Locals.APPROVED}
          </Chip>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Pending}
            onPress={() => HandleStatus(Applicants_Status.Pending)}>
            {Locals.PENDING}
          </Chip>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Interview}
            onPress={() => HandleStatus(Applicants_Status.Interview)}>
            {Locals.INTERVIEW}
          </Chip>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Waitlist}
            onPress={() => HandleStatus(Applicants_Status.Waitlist)}>
            {Locals.WAITLIST}
          </Chip>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Declined}
            onPress={() => HandleStatus(Applicants_Status.Declined)}>
            {Locals.DECLINED}
          </Chip>
          <Chip
            style={styles.RadioItem}
            selected={Status === Applicants_Status.Inactive}
            onPress={() => HandleStatus(Applicants_Status.Inactive)}>
            {Locals.INACTIVE}
          </Chip>
        </ScrollView>
      </View>

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              tintColor={Colors.OnBackground}
              refreshing={loading}
              onRefresh={refetch}
            />
          }
          contentContainerStyle={styles.contentContainerStyle}
          ListEmptyComponent={
            <View style={styles.notAuth}>
              <IconButton
                icon="briefcase-search"
                size={100}
                color={Colors.Surface}
              />
            </View>
          }
          renderItem={({item, index}) => {
            return (
              <MyCardJoblist
                navigate={() => navigate('Job', item)}
                changeWidth={false}
                data={item}
                index={index}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          data={data?.applicants_list}
          keyExtractor={(_item: any, index: {toString: () => any}) =>
            index.toString()
          }
        />
      )}
    </Page>
  );
};

const JobsList = () => {
  const {isAuthenticated} = UseAuth() as AuthenticatedTypes;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const headerHeight = useHeaderHeight();

  if (isAuthenticated) {
    return <JobsListAuth />;
  }
  return (
    <Page paddingHorizontal={0} loadingLayer={true}>
      <View
        style={{
          height: headerHeight,
        }}
      />
      <View style={styles.notAuth}>
        <IconButton icon="briefcase" size={100} color={Colors.Surface} />
      </View>
    </Page>
  );
};

export default JobsList;
