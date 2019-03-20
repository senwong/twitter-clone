import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getGlobalTrends } from '../Api';
import TitleBar from '../middleComponents/TitleBar';
import ListCard from './ListCard';
import Dot from '../BaseComponents/Dot';
import ShowMore from '../BaseComponents/ShowMore';

const Container = styled.div`
  background-color: rgb(255, 255, 255);
`;
function GlobalTrends() {
  const [globalTrends, setGlobalTrends] = useState();
  useEffect(() => {
    const getGlobalTrendsPromise = getGlobalTrends();
    getGlobalTrendsPromise
      .promise
      .then(
        (res) => {
          setGlobalTrends(res.data);
        },
        () => {},
      );
    return () => {
      getGlobalTrendsPromise.cancel();
    };
  }, []);
  return (
    <Container>
      <TitleBar title="全球趋势" rear />
      {
        globalTrends && globalTrends.map((globalTrend, i) => (
          <ListCard
            key={globalTrend.id}
            head={(
              <div>
                {i + 1}
                <Dot />
                全球趋势
              </div>
            )}
            body={globalTrend.title}
            foot={`${globalTrend.tweetNum} 推文`}
          />
        ))
      }
      <ShowMore href="i/trends" />
    </Container>
  );
}
export default GlobalTrends;
