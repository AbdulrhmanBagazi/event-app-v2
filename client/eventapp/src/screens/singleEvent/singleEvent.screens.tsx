import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Image, ImageBackground, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {useThemeContext} from '../../context/theme/themeToggle.context';
import Page from '../../layout/page';
import {ParamList, RootStackParamList, ThemeContextType} from '../../typs';
import Logo from '../home/components/card/logo';
import {styles} from './styles.singleEvent';
import {ScrollView} from 'react-native-gesture-handler';
import {SCREEN_HEIGHT} from '../../layout/screenDimensions';

const SingleEvent = () => {
  const {Colors, isDarkMode} = useThemeContext() as ThemeContextType;
  const {setOptions} = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<ParamList, 'Event'>>();
  const getHeaderHeight = useHeaderHeight();

  React.useEffect(() => {
    return setOptions({
      title: route.params.params.title,
      headerTintColor: '#fff',
      // headerBlurEffect: 'dark',
    });
  }, [route.params.params.companyLogo, route.params.params.title, setOptions]);

  return (
    <Page paddingHorizontal={0}>
      <ImageBackground
        source={{uri: route.params.params.image}}
        style={[
          styles.Image,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isDarkMode
              ? 'rgba(232,149,159,0.5)'
              : 'rgba(175,0,41, 0.5)',
            height: getHeaderHeight + 300,
          },
        ]}
        resizeMode="cover"
        blurRadius={15}>
        <View style={{height: getHeaderHeight}} />
        <Avatar.Image
          size={100}
          style={styles.TopCardAvatart}
          source={() =>
            route.params.params.companyLogo ? (
              <Image
                source={{
                  uri: route.params.params.companyLogo,
                }}
                resizeMode="contain"
                style={styles.CompanyLogo}
              />
            ) : (
              <Logo width={110} height={110} />
            )
          }
        />
      </ImageBackground>
      <View style={[styles.Scroll, {top: getHeaderHeight}]}>
        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}>
          <View style={{height: getHeaderHeight + 20}} />
          <View
            style={[
              styles.MainView,
              {
                height: SCREEN_HEIGHT - getHeaderHeight,
                backgroundColor: Colors.Background,
              },
            ]}>
            <View style={styles.TitleView}>
              <Text>Title</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Page>
  );
};

export default SingleEvent;
