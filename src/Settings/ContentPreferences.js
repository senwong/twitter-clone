import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LayOut from './LayOut';
import MakeSettingPanel from './MakeSettingPanel';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';

// const personalizationLabels = { 0: '关闭', 1: '允许一些', 2: '允许全部' };
const data = {
  title: '内容偏好',
  list: [
    {
      key: 1,
      title: '探索',
      list: [
        {
          key: 1, type: 'link', title: '探索设置', to: '/twitter-clone/settings/search',
        },
        {
          key: 2, type: 'link', title: '趋势', to: '/twitter-clone/settings/trends',
        },
      ],
    },
    {
      key: 2,
      title: '安全',
      list: [
        {
          key: 1, type: 'link', title: '已隐藏', to: '/twitter-clone/settings/mute',
        },
        {
          key: 2, type: 'link', title: '已屏蔽账号', to: '/twitter-clone/settings/blocked/all',
        },
      ],
    },
    {
      key: 3,
      title: '个性化与数据',
      list: [
        {
          key: 1, type: 'link', title: '个性化与数据', subTitle: '允许一些', to: '/twitter-clone/settings/personalization',
        },
      ],
    },
  ],
};
function ContentPreferences() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="内容偏好" />}
      rightAside={(
        <MakeSettingPanel data={data} />
      )}
    />
  );
}
ContentPreferences.propTypes = {
  // personalization: PropTypes.oneOf([0, 1, 2]),
};
ContentPreferences.defaultProps = {
  // personalization: 0,
};
const mapStateToProps = state => ({
  personalization: state.currentUser && state.currentUser.personalization,
});
export default connect(
  mapStateToProps,
)(ContentPreferences);
