import React from 'react';
import {
  HomeIcon, ExploreIcon, NotifyIcon, MessageIcon,
} from '../BaseComponents/SVGIcons';
import NavigationList from './NavigationList';

export default function NavigationBar() {
  const links = [
    { to: '/home', title: <HomeIcon middle /> },
    { to: '/explore', title: <ExploreIcon middle /> },
    { to: '/notifications', title: <NotifyIcon middle /> },
    { to: '/messages', title: <MessageIcon middle /> },
  ];
  return <NavigationList links={links} type="icon" />;
}
