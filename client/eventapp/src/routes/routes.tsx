import Home from '../screens/home/home.screen';
import {RoutesType} from '../typs';
import Loading from '../screens/loading/loading.screen';
import Profile from '../screens/profile/profile.screen';
import Auth from '../screens/auth/auth.screen';
import Signup from '../screens/auth/signup/signup.auth';
import Events from '../screens/Events/events.screen';
import UserProfile from '../screens/profile/screens/userProfile/userProfile.screens.profile';
import Earnings from '../screens/profile/screens/earnings/earnings.screen.profile';
import ChangePassword from '../screens/profile/screens/changePassword/changePassword.screens.profile';
import Contact from '../screens/profile/screens/contact/contact.screens.profile';
import SingleEvent from '../screens/singleEvent/singleEvent.screens';
import Language from '../screens/language/language.screen';
import Apply from '../screens/apply/apply.screens';
import JobsList from '../screens/jobslist/jobslist.screen';
import Job from '../screens/jobslist/job.screen/job.screen';

const ProfileScreens: RoutesType[] = [
  {
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    name: 'Earnings',
    component: Earnings,
  },
  {
    name: 'ChangePassword',
    component: ChangePassword,
  },
  {
    name: 'Contact',
    component: Contact,
  },
];

const EventsScreens: RoutesType[] = [
  {
    name: 'All_Events',
    component: Events,
  },
  {
    name: 'Event',
    component: SingleEvent,
  },
  {
    name: 'Apply',
    component: Apply,
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
  {
    name: 'Language',
    component: Language,
  },
];

const TabScreens: RoutesType[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'JobsList',
    component: JobsList,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

const JobScreen: RoutesType[] = [
  {
    name: 'Job',
    component: Job,
  },
];

export {
  AuthScreens,
  LoadingScreen,
  TabScreens,
  EventsScreens,
  ProfileScreens,
  JobScreen,
};
