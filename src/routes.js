import React from 'react';
import { Redirect } from 'react-router-dom';
import Explore from './Explore';
import Search from './Search';
import Home from './container/Home';
import Notifications from './Notifications';
import Message from './Message';
import Related from './Related';
import Settings from './Settings';
import Account from './Settings/Account';
import Safety from './Settings/Safety';
import NotificationsSetting from './Settings/Notifications';
import ContentPreferences from './Settings/ContentPreferences';
import Data from './Settings/Data';
import ScreenName from './Settings/ScreenName';
import Phone from './Settings/Phone';
import Email from './Settings/Email';
import Trend from './Explore/Trend';

import Password from './Settings/Password';
import Language from './Settings/Language';
import Country from './Settings/Country';
import Security from './Settings/Security';
import YourData from './Settings/YourData';
import Deactivate from './Settings/Deactivate';
import Applications from './Settings/Applications';
import About from './Settings/About';
import LoginVerification from './Settings/LoginVerification';
import Accessibility from './Settings/Accessibility';
import AutoPlay from './Settings/AutoPlay';
import User from './container/User';
import SettingSearch from './Settings/Search';
import SettingTrends from './Settings/Trends';
import Mute from './Settings/Mute';
import MutedAll from './Settings/MutedAll';
import MutedFollowing from './Settings/MutedFollowing';
import MutedNotFollowing from './Settings/MutedNotFollowing';
import BlockedAll from './Settings/BlockedAll';
import BlockedImported from './Settings/BlockedImported';
import Personalization from './Settings/Personalization';
import AdvancedFilters from './Settings/AdvancedFilters';
import PushNotifications from './Settings/PushNotifications';
import SMSNotifications from './Settings/SMSNotifications';
import EmailNotifications from './Settings/EmailNotifications';
import Location from './Settings/Location';
import Tagging from './Settings/Tagging';
import Contacts from './Settings/Contacts';
import ContactsDashboard from './Settings/ContactsDashboard';
import Teams from './Settings/Teams';
import BackupCode from './Settings/BackupCode';
import TemporayrPassword from './Settings/TemporaryPassword';
import Login from './Login';

const routes = [
  {
    path: '/twitter-clone/',
    exact: true,
    component: () => <Redirect to="/twitter-clone/home" />,
  },
  {
    path: '/twitter-clone/home',
    component: Home,
  },
  {
    path: '/twitter-clone/explore',
    component: Explore,
  },
  {
    path: '/twitter-clone/notifications',
    component: Notifications,
  },
  {
    path: '/twitter-clone/messages',
    component: Message,
  },
  {
    path: '/twitter-clone/search',
    component: Search,
  },
  {
    path: '/twitter-clone/related',
    component: Related,
  },
  {
    path: '/twitter-clone/settings',
    exact: true,
    component: Settings,
  },
  {
    path: '/twitter-clone/settings/account/login_verification',
    exact: true,
    component: LoginVerification,
  },
  {
    path: '/twitter-clone/settings/account/login_verification/backup_code',
    exact: true,
    component: BackupCode,
  },
  {
    path: '/twitter-clone/settings/account/login_verification/temporary_password',
    exact: true,
    component: TemporayrPassword,
  },
  {
    path: '/twitter-clone/settings/account',
    component: Account,
  },
  {
    path: '/twitter-clone/settings/safety',
    component: Safety,
  },
  {
    path: '/twitter-clone/settings/notifications',
    exact: true,
    component: NotificationsSetting,
  },
  {
    path: '/twitter-clone/settings/content_preferences',
    component: ContentPreferences,
  },
  {
    path: '/twitter-clone/settings/data',
    component: Data,
  },
  {
    path: '/twitter-clone/settings/accessibility',
    component: Accessibility,
  },
  {
    path: '/twitter-clone/settings/about',
    component: About,
  },
  {
    path: '/twitter-clone/settings/screen_name',
    component: ScreenName,
  },
  {
    path: '/twitter-clone/settings/phone',
    component: Phone,
  },
  {
    path: '/twitter-clone/settings/email',
    component: Email,
  },
  {
    path: '/twitter-clone/settings/password',
    component: Password,
  },
  {
    path: '/twitter-clone/settings/security',
    component: Security,
  },
  {
    path: '/twitter-clone/settings/language',
    component: Language,
  },
  {
    path: '/twitter-clone/settings/country',
    component: Country,
  },
  {
    path: '/twitter-clone/settings/your_data',
    component: YourData,
  },
  {
    path: '/twitter-clone/settings/applications',
    component: Applications,
  },
  {
    path: '/twitter-clone/settings/AutoPlay',
    component: AutoPlay,
  },
  {
    path: '/twitter-clone/settings/search',
    component: SettingSearch,
  },
  {
    path: '/twitter-clone/settings/trends',
    component: SettingTrends,
  },
  {
    path: '/twitter-clone/settings/mute',
    component: Mute,
  },
  {
    path: '/twitter-clone/settings/muted/all',
    component: MutedAll,
  },
  {
    path: '/twitter-clone/settings/muted/following',
    component: MutedFollowing,
  },
  {
    path: '/twitter-clone/settings/muted/not_following',
    component: MutedNotFollowing,
  },
  {
    path: '/twitter-clone/settings/blocked/all',
    component: BlockedAll,
  },
  {
    path: '/twitter-clone/settings/blocked/imported',
    component: BlockedImported,
  },
  {
    path: '/twitter-clone/settings/personalization',
    component: Personalization,
  },
  {
    path: '/twitter-clone/settings/notifications/advanced_filters',
    component: AdvancedFilters,
  },
  {
    path: '/twitter-clone/settings/push_notifications',
    component: PushNotifications,
  },
  {
    path: '/twitter-clone/settings/sms_notifications',
    component: SMSNotifications,
  },
  {
    path: '/twitter-clone/settings/email_notifications',
    component: EmailNotifications,
  },
  {
    path: '/twitter-clone/settings/location',
    component: Location,
  },
  {
    path: '/twitter-clone/settings/tagging',
    component: Tagging,
  },
  {
    path: '/twitter-clone/settings/contacts',
    component: Contacts,
  },
  {
    path: '/twitter-clone/settings/contacts_dashboard',
    component: ContactsDashboard,
  },
  {
    path: '/twitter-clone/settings/teams',
    component: Teams,
  },
  {
    path: '/twitter-clone/settings/deactivate',
    component: Deactivate,
  },
  {
    path: '/twitter-clone/i/trends',
    component: Trend,
  },
  {
    path: '/twitter-clone/:userName',
    component: User,
  },
];
const common = [
  {
    path: '/twitter-clone/login',
    component: Login,
  },
];
export default { protected: routes, common };
