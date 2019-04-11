import React from 'react';
import { Redirect } from 'react-router-dom';
import Explore from './Explore';
import Search from './Search';
import Home from './Home';
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
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/explore',
    component: Explore,
  },
  {
    path: '/notifications',
    component: Notifications,
  },
  {
    path: '/messages',
    component: Message,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/related',
    component: Related,
  },
  {
    path: '/settings',
    exact: true,
    component: Settings,
  },
  {
    path: '/settings/account/login_verification',
    exact: true,
    component: LoginVerification,
  },
  {
    path: '/settings/account/login_verification/backup_code',
    exact: true,
    component: BackupCode,
  },
  {
    path: '/settings/account/login_verification/temporary_password',
    exact: true,
    component: TemporayrPassword,
  },
  {
    path: '/settings/account',
    component: Account,
  },
  {
    path: '/settings/safety',
    component: Safety,
  },
  {
    path: '/settings/notifications',
    exact: true,
    component: NotificationsSetting,
  },
  {
    path: '/settings/content_preferences',
    component: ContentPreferences,
  },
  {
    path: '/settings/data',
    component: Data,
  },
  {
    path: '/settings/accessibility',
    component: Accessibility,
  },
  {
    path: '/settings/about',
    component: About,
  },
  {
    path: '/settings/screen_name',
    component: ScreenName,
  },
  {
    path: '/settings/phone',
    component: Phone,
  },
  {
    path: '/settings/email',
    component: Email,
  },
  {
    path: '/settings/password',
    component: Password,
  },
  {
    path: '/settings/security',
    component: Security,
  },
  {
    path: '/settings/language',
    component: Language,
  },
  {
    path: '/settings/country',
    component: Country,
  },
  {
    path: '/settings/your_data',
    component: YourData,
  },
  {
    path: '/settings/applications',
    component: Applications,
  },
  {
    path: '/settings/AutoPlay',
    component: AutoPlay,
  },
  {
    path: '/settings/search',
    component: SettingSearch,
  },
  {
    path: '/settings/trends',
    component: SettingTrends,
  },
  {
    path: '/settings/mute',
    component: Mute,
  },
  {
    path: '/settings/muted/all',
    component: MutedAll,
  },
  {
    path: '/settings/muted/following',
    component: MutedFollowing,
  },
  {
    path: '/settings/muted/not_following',
    component: MutedNotFollowing,
  },
  {
    path: '/settings/blocked/all',
    component: BlockedAll,
  },
  {
    path: '/settings/blocked/imported',
    component: BlockedImported,
  },
  {
    path: '/settings/personalization',
    component: Personalization,
  },
  {
    path: '/settings/notifications/advanced_filters',
    component: AdvancedFilters,
  },
  {
    path: '/settings/push_notifications',
    component: PushNotifications,
  },
  {
    path: '/settings/sms_notifications',
    component: SMSNotifications,
  },
  {
    path: '/settings/email_notifications',
    component: EmailNotifications,
  },
  {
    path: '/settings/location',
    component: Location,
  },
  {
    path: '/settings/tagging',
    component: Tagging,
  },
  {
    path: '/settings/contacts',
    component: Contacts,
  },
  {
    path: '/settings/contacts_dashboard',
    component: ContactsDashboard,
  },
  {
    path: '/settings/teams',
    component: Teams,
  },
  {
    path: '/settings/deactivate',
    component: Deactivate,
  },
  {
    path: '/i/trends',
    component: Trend,
  },
  {
    path: '/:userName',
    component: User,
  },
];
const common = [
  {
    path: '/login',
    component: Login,
  },
];
export default { protected: routes, common };
