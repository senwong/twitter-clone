import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MakeSettingPanel from './MakeSettingPanel';

const data = user => ({
  title: '设置',
  list: [
    {
      key: 1,
      title: `@${user.name}`,
      list: [
        {
          key: 1, type: 'link', to: '/settings/account', title: '账号', isNav: true,
        },
        {
          key: 2, type: 'link', to: '/settings/safety', title: '隐私和安全', isNav: true,
        },
        {
          key: 3, type: 'link', to: '/settings/notifications', title: '通知', isNav: true,
        },
        {
          key: 4, type: 'link', to: '/settings/content_preferences', title: '内容偏好', isNav: true,
        },
      ],
    },
    {
      key: 2,
      title: '通用',
      list: [
        {
          key: 1, type: 'link', to: '/settings/data', title: '数据使用', isNav: true,
        },
        {
          key: 2, type: 'link', to: '/settings/accessibility', title: '辅助功能', isNav: true,
        },
        {
          key: 3, type: 'link', to: '/settings/about', title: '关于应用', isNav: true,
        },
      ],
    },
  ],
});

function SettingPanel({ user }) {
  return (
    <MakeSettingPanel data={data(user)} />
  );
}
SettingPanel.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({
  user: state.currentUser,
});
export default connect(mapStateToProps)(SettingPanel);
