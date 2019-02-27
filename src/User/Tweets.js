import React, { useState, useEffect } from 'react';
import TitleItem from '../middleComponents/TitleItem';
import { getRecommendFollowings } from '../dataMock';
import { UserCard } from '../middleComponents/Cards';

export default function Tweets() {
  const [recommendFollowings, setRecommendFollowings] = useState();
  useEffect(() => {
    setRecommendFollowings(getRecommendFollowings());
  }, []);
  return (
    <div>
      <TitleItem title="推荐关注" />
      {recommendFollowings && recommendFollowings.map(u => <UserCard user={u} key={u.id} />)}
      <TitleItem title="显示更多" primary />
    </div>
  );
}
