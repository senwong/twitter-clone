import React from 'react';
import {
  BrowserRouter as Router, Route, withRouter,
} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import Layout from '../layout/Layout';
import Account from './Account';
import Safety from './Safety';
import { useMediaQuery } from '../utilitys';
import SubTitle from './SubTitle';
import LinkItem from './LinkItem';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';

const Container = styled.div`
  background-color: rgb(230, 236, 240);
  height: 100%;
  margin-bottom: 59px;
`;
function Settings({ user, match, history }) {
  const isWide = useMediaQuery('(min-width: 1000px)');
  if (isWide) {
    history.push('/settings/account');
  }
  return (
    <Router>
      <Layout
        head={<></>}
        main={(
          <Container>
            <BackHeadWithUsername title="设置" />
            <SubTitle>
              @
              {user.name}
            </SubTitle>
            {
              [
                { url: 'settings/account', title: '账号' },
                { url: 'settings/safety', title: '隐私和安全' },
                { url: 'settings/notifications', title: '通知' },
                { url: 'settings/content_preferences', title: '内容偏好' },
              ].map(({ title, url }) => <LinkItem key={title} to={url} title={title} />)
            }
            <SubTitle>通用</SubTitle>
            {
              [
                { url: 'settings/data', title: '数据使用' },
                { url: 'settings/accessibility', title: '辅助功能' },
                { url: 'settings/about', title: '关于应用' },
              ].map(({ url, title }) => <LinkItem key={title} to={url} title={title} />)
            }
          </Container>
        )}
        rightAside={(
          <>
            <Route path={`${match.url}/account`} component={Account} />
            <Route path="/settings/safety" component={Safety} />
          </>
        )}
      />
    </Router>
  );
}
Settings.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
const mapStateToProps = state => ({
  user: state.currentUser,
});
export default withRouter(connect(mapStateToProps)(Settings));
