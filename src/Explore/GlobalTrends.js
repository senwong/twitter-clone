import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getGlobalTrends } from "../Api";
import TitleBar from "../middleComponents/TitleBar";
import ListCard from "./ListCard";
import Dot from "../BaseComponents/Dot";
import ShowMore from "../BaseComponents/ShowMore";
import Text from "../BaseComponents/Text";
import { whiteBackground } from "../themes";

const Container = styled.div`
  ${whiteBackground}
`;
function GlobalTrends() {
  const [globalTrends, setGlobalTrends] = useState([]);
  useEffect(() => {
    const getGlobalTrendsPromise = getGlobalTrends();
    getGlobalTrendsPromise.promise.then(
      res => setGlobalTrends(res.data),
      () => {}
    );
    return () => {
      getGlobalTrendsPromise.cancel();
    };
  }, []);
  return (
    <Container>
      <TitleBar title="全球趋势" rear />
      {globalTrends.length > 0 ? (
        globalTrends.map((globalTrend, i) => (
          <ListCard
            key={globalTrend.id}
            head={(
<Text secondary small>
  {i + 1}
  <Dot />
                全球趋势
</Text>
)}
            body={<Text>{globalTrend.title}</Text>}
            foot={<Text secondary>{`${globalTrend.tweetNum} 推文`}</Text>}
          />
        ))
      ) : (
        <></>
      )}
      <ShowMore href="i/trends" />
    </Container>
  );
}
export default GlobalTrends;
