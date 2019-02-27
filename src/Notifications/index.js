import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { SettingIcon } from '../BaseComponents/SVGIcons';
import CustomHr from '../BaseComponents/CustomHr';
import NavList, { LinkList } from '../middleComponents/NavList';
import CustomHead from '../middleComponents/CustomHead';
import { NotifyCard } from '../middleComponents/Cards';
import { getNotifications } from '../dataMock';
import Text from '../BaseComponents/Text';
import CurrentUserAvatar from '../container/CurrentUserAvatar';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import ScrollToggleHead from '../middleComponents/ScrollToggleHead';

function AllNotifications() {
  const [notifications, setNotifications] = useState();
  useEffect(() => {
    setNotifications(getNotifications());
  }, []);
  return (
    <div>
      {
        notifications
        && notifications.map(n => <NotifyCard key={n.id} notification={n} />)
      }
    </div>
  );
}

function Mentions() {
  return (
    <div style={{ padding: '37px 18px', textAlign: 'center' }}>
      <div style={{ margin: '0 0 9px' }}>
        <Text xlarge bold>这里暂时没有内容</Text>
      </div>
      <Text secondary>当有人提及你时，你会在这里找到它。</Text>
    </div>
  );
}

export default function Notifications({ match }) {
  const LINKS = [
    { to: match.url, title: '全部', exact: true },
    { to: `${match.url}/mentions`, title: '提及' },
  ];
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
  return (
    <ScrollToggleHead
      head={(
        <React.Fragment>
          <CustomHead
            left={<CurrentUserAvatar xsmall />}
            middle={<Text bold large>通知</Text>}
            right={<Link to="/settings/notifications"><SettingIcon small primary /></Link>}
          />
          <NavList />
          <CustomHr />
        </React.Fragment>
)}
      main={(
        <React.Fragment>
          <LinkList links={LINKS} />
          <PullDownRefresh onRefresh={handleRefresh}>
            <Switch>
              <Route exact path={match.url} component={AllNotifications} />
              <Route path={`${match.url}/mentions`} component={Mentions} />
            </Switch>
          </PullDownRefresh>
        </React.Fragment>
)}
    />
  );
}
Notifications.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
