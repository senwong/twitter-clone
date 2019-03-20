import React, { useState, useEffect } from 'react';
import Head from '../container/settingPages/Head';
import { getTrends } from '../Api';
import Dot from '../BaseComponents/Dot';
import ListCard from './ListCard';

export default function () {
  const [trends, setTrends] = useState();
  useEffect(() => {
    const promise = getTrends();
    promise.promise
      .then(res => setTrends(res.data), () => {});
    return () => {
      promise.cancel();
    };
  }, []);
  return (
    <React.Fragment>
      <Head title="趋势" />
      {
        trends && trends.map((trend, i) => (
          <ListCard
            key={trend.id}
            head={(
              <div>
                {i + 1}
                <Dot />
全球趋势
              </div>
)}
            body={trend.title}
            foot={`${trend.tweetNum} 推文`}
          />
        ))
      }
    </React.Fragment>
  );
}
