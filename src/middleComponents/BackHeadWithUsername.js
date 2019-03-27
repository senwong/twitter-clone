import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackHead from './BackHead';

function BackHeadWithUsername({ title, subTitle }) {
  return <BackHead title={title} subTitle={subTitle} />;
}
BackHeadWithUsername.propTypes = {
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
