import React from 'react';
import MutedLayout from './MutedLayout';

function MutedNotFollowing() {
  return (
    <MutedLayout
      contentTitle="你没有隐藏任何人"
      contentSubTitle="当你隐藏账号后，你不会在你的时间线上看到他们的推文。"
      href="https://support.twitter.com/articles/20171399"
    />
  );
}
export default MutedNotFollowing;
