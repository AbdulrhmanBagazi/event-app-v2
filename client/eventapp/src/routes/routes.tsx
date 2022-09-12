//screens
// import Signin from '../screens/auth/signin/signin.auth';
import Home from '../screens/home/home.screen';
import {RoutesType} from '../typs';
import HomeStack from './HomeStack';
// import AuthStack from './AuthStack';
import Loading from '../screens/loading/loading.screen';
import Profile from '../screens/profile/profile.screen';
import ProfileStack from './PorfileStack';
import Auth from '../screens/auth/auth.screen';
import Signup from '../screens/auth/signup/signup.auth';

const HomeScreens: RoutesType[] = [
  {
    name: 'Home',
    component: Home,
  },
];

const ProfileScreens: RoutesType[] = [
  {
    name: 'Profile',
    component: Profile,
  },
];

const AuthScreens: RoutesType[] = [
  {
    name: 'Auth',
    component: Auth,
  },
  // {
  //   name: 'Signin',
  //   component: Signin,
  // },
  {
    name: 'Signup',
    component: Signup,
  },
];

const LoadingScreen: RoutesType[] = [
  {
    name: 'Loading',
    component: Loading,
  },
];

const TabScreens: RoutesType[] = [
  {
    name: 'Main',
    component: HomeStack,
  },
  {
    name: 'Account',
    component: ProfileStack,
  },
];

export {HomeScreens, ProfileScreens, AuthScreens, LoadingScreen, TabScreens};
