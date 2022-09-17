//screens
// import Signin from '../screens/auth/signin/signin.auth';
import Home from '../screens/home/home.screen';
import {RoutesType} from '../typs';
// import AuthStack from './AuthStack';
import Loading from '../screens/loading/loading.screen';
import Profile from '../screens/profile/profile.screen';
import Auth from '../screens/auth/auth.screen';
import Signup from '../screens/auth/signup/signup.auth';
import Events from '../screens/Events/events.screen';

// const HomeScreens: RoutesType[] = [
//   {
//     name: 'Home',
//     component: Home,
//   },
// ];

// const ProfileScreens: RoutesType[] = [
//   {
//     name: 'Profile',
//     component: Profile,
//   },
// ];

const EventsScreens: RoutesType[] = [
  {
    name: 'All Events',
    component: Events,
  },
];

const AuthScreens: RoutesType[] = [
  {
    name: 'Signin',
    component: Auth,
  },
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
    component: Home,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

export {AuthScreens, LoadingScreen, TabScreens, EventsScreens};
