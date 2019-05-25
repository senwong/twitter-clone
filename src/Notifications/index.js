import React, { useState, useEffect } from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import { SettingIcon } from "../BaseComponents/SVGIcons";
import NotificationCard from "./NotificationCard";
import { getNotifications } from "../Api";
import Text from "../BaseComponents/Text";
import PullDownRefresh from "../middleComponents/PullDownRefresh";
import Layout from "../layout/Layout";
import NavigationList from "../middleComponents/NavigationList";
import HomePageNarrowHead from "../layout/HomePageNarrowHead";

function AllNotifications() {
  const [notifications, setNotifications] = useState();
  useEffect(() => {
    const p = getNotifications();
    p.promise.then(res => setNotifications(res.data));
    return () => {
      p.cancel();
    };
  }, []);
  return (
    <>
      {notifications &&
        notifications.map(n => (
          <NotificationCard key={n.id} notification={n} />
        ))}
    </>
  );
}

function Mentions() {
  return (
    <div style={{ padding: "37px 18px", textAlign: "center" }}>
      <div style={{ margin: "0 0 9px" }}>
        <Text xlarge bold>
          这里暂时没有内容
        </Text>
      </div>
      <Text secondary>当有人提及你时，你会在这里找到它。</Text>
    </div>
  );
}

let Navigation = ({ match }) => {
  const LINKS = [
    {
      to: match.url,
      title: "全部",
      exact: true,
      ariaLabel: "View all notifications"
    },
    {
      to: `${match.url}/mentions`,
      title: "提及",
      ariaLabel: "View notifications mentioned to yourself"
    }
  ];
  return <NavigationList links={LINKS} />;
};
Navigation.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};
Navigation = withRouter(Navigation);

let MainContent = ({ match }) => {
  function handleRefresh() {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 1000);
    });
  }
  return (
    <PullDownRefresh onRefresh={handleRefresh}>
      <Switch>
        <Route exact path={match.url} component={AllNotifications} />
        <Route path={`${match.url}/mentions`} component={Mentions} />
      </Switch>
    </PullDownRefresh>
  );
};
MainContent.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};
MainContent = withRouter(MainContent);

export default function Notifications() {
  return (
    <Layout
      narrowHead={(
<HomePageNarrowHead
  middle={(
<Text bold large>
              通知
            </Text>
)}
  right={(
<Link to="/settings/notifications">
              <SettingIcon small primary />
            </Link>
)}
/>
)}
      main={(
<>
  <Navigation />
  <MainContent />
</>
)}
    />
  );
}
