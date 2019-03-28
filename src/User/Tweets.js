import React, { useState, useEffect } from 'react';
import TitleBar from '../middleComponents/TitleBar';
import { getRecommendFollowings } from '../Api';
import UserCard from '../middleComponents/UserCard';
import ShowMore from '../BaseComponents/ShowMore';

export default function Tweets() {
  const [recommendFollowings, setRecommendFollowings] = useState();
  useEffect(() => {
    const p = getRecommendFollowings();
    p.promise.then(
      res => setRecommendFollowings(res.data),
    );
    return () => {
      p.cancel();
    };
  }, []);
  return (
    <div>
      <TitleBar title="推荐关注" />
      {recommendFollowings && recommendFollowings.map(u => <UserCard user={u} key={u.id} />)}
      <ShowMore href="#" />
    </div>
  );
}
