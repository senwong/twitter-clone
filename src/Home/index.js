import React from "react";
import Text from "../BaseComponents/Text";
import HomePageNarrowHead from "../layout/HomePageNarrowHead";
import Layout from "../layout/Layout";
import TweetListRefreshable from "./TweetListRefreshable";

function Home() {
  return (
    <Layout
      narrowHead={(
<HomePageNarrowHead
  middle={(
<Text large bold>
              主页
            </Text>
)}
/>
)}
      main={<TweetListRefreshable />}
    />
  );
}
export default Home;
