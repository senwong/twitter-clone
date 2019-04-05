import React from 'react';
import {
  HomeIcon, ExploreIcon, NotifyIcon, MessageIcon,
} from '../BaseComponents/SVGIcons';
import NavigationList from './NavigationList';

export default function NavigationBar() {
  const links = [
    { to: '/home', title: <HomeIcon middle />, ariaLabel: 'Go to home page' },
    { to: '/explore', title: <ExploreIcon middle />, ariaLabel: 'Go to explore page' },
    { to: '/notifications', title: <NotifyIcon middle />, ariaLabel: 'Go to notifications page' },
    { to: '/messages', title: <MessageIcon middle />, ariaLabel: 'Go to messages page' },
  ];
  return <NavigationList links={links} type="icon" />;
}
