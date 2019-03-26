import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import BackHead from './BackHead';

function BackHeadWithUsername({ title, subTitle, history }) {
  return <BackHead title={title} subTitle={subTitle} history={history} />;
}
BackHeadWithUsername.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
BackHeadWithUsername.defaultProps = {
  title: '',
  subTitle: '',
};
const mapStateToProps = state => ({
  subTitle: state.currentUser && state.currentUser.name,
});
export default connect(mapStateToProps)(BackHeadWithUsername);
