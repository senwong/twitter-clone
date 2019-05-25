import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import CustomHr from "../BaseComponents/CustomHr";
import HotPage from "./HotPage";
import LivePage from "./LivePage";
import UserPage from "./UserPage";
import ImagePage from "./ImagePage";
import VideoPage from "./VideoPage";
import NewsPage from "./NewsPage";
import PeriscopePage from "./PeriscopePage";

function SearchResutlContent({ query }) {
  return (
    <div>
      <CustomHr />
      <Route
        path="/search"
        render={({ location }) => {
          if (location.search.indexOf("type=") < 0) {
            return <HotPage query={query} />;
          }
          if (location.search.indexOf("type=live") > -1) {
            return <LivePage query={query} />;
          }
          if (location.search.indexOf("type=user") > -1) {
            return <UserPage query={query} />;
          }
          if (location.search.indexOf("type=image") > -1) {
            return <ImagePage query={query} />;
          }
          if (location.search.indexOf("type=video") > -1) {
            return <VideoPage query={query} />;
          }
          if (location.search.indexOf("type=news") > -1) {
            return <NewsPage query={query} />;
          }
          if (location.search.indexOf("type=periscope") > -1) {
            return <PeriscopePage query={query} />;
          }
          return <div>search route error</div>;
        }}
      />
    </div>
  );
}
SearchResutlContent.propTypes = {
  query: PropTypes.string.isRequired
};
export default SearchResutlContent;
