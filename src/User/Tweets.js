import React, { useState, useEffect } from 'react';
import TitleBar from '../middleComponents/TitleBar';
import { getRecommendFollowings } from '../dataMock';
import { UserCard } from '../middleComponents/Cards';
import ShowMore from '../BaseComponents/ShowMore';

export default function Tweets() {
  const [recommendFollowings, setRecommendFollowings] = useState();
  useEffect(() => {
    setRecommendFollowings(getRecommendFollowings());
  }, []);
  return (
    <div>
      <TitleBar title="推荐关注" />
      {recommendFollowings && recommendFollowings.map(u => <UserCard user={u} key={u.id} />)}
      <ShowMore href="#" />
    </div>
  );
}
