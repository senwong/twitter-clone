import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = user => ({
  title: '账号',
  list: [
    {
      key: 1,
      title: '登录和安全',
      list: [
        {
          key: 1, type: 'link', to: '/settings/screen_name', title: '用户名', subTitle: user.name,
        },
        {
          key: 2, type: 'link', to: '/settings/phone', title: '手机', subTitle: String(user.phone),
        },
        {
          key: 3, type: 'link', to: '/settings/email', title: '电子邮件', subTitle: user.email,
        },
        {
          key: 4, type: 'link', to: '/settings/password', title: '密码',
        },
        {
          key: 5, type: 'link', to: '/settings/security', title: '安全',
        },
      ],
    },
    {
      key: 2,
      title: '数据和权限',
      list: [
        {
          key: 1, type: 'link', to: '/settings/language', title: '语言', subTitle: user.language,
        },
        {
          key: 2, type: 'link', to: '/settings/country', title: '国家/地区', subTitle: user.country,
        },
        {
          key: 3, type: 'link', to: '/settings/your_data', title: '你的数据',
        },
        {
          key: 4, type: 'link', to: '/settings/applications', title: '应用和会话',
        },
      ],
    },
    {
      key: 3,
      list: [
        {
          key: 1, type: 'link', to: '/settings/deactivate', title: '停用你的账号',
        },
      ],
    },
  ],
});

function Account({ user }) {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="账号" />}
      rightAside={(
        <MakeSettingPanel data={data(user)} />
      )}
    />
  );
}
Account.propTypes = {
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
export default connect(mapStateToProps)(Account);
