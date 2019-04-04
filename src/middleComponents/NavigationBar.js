import React from 'react';
import {
  HomeIcon, ExploreIcon, NotifyIcon, MessageIcon,
} from '../BaseComponents/SVGIcons';
import NavigationList from './NavigationList';

export default function NavigationBar() {
  const links = [
    { to: '/twitter-clone/home', title: <HomeIcon middle /> },
    { to: '/twitter-clone/explore', title: <ExploreIcon middle /> },
    { to: '/twitter-clone/notifications', title: <NotifyIcon middle /> },
    { to: '/twitter-clone/messages', title: <MessageIcon middle /> },
  ];
  return <NavigationList links={links} type="icon" />;
}
