import React from 'react';
import PropTypes from 'prop-types';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import { SettingsContainer, SubTitle, LinkItem } from './index';
import Head from '../container/settingPages/Head';

function genLinkItem({
  key, title, to, subTitle,
}) {
  return <LinkItem key={key} to={to} title={title} subTitle={subTitle} />;
}
genLinkItem.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
genLinkItem.defaultProps = {
  subTitle: '',
};

export default function Account({ user, language, country }) {
  return (
    <SettingsContainer>
      <Head title="账号" />
      <SubTitle>登录和安全</SubTitle>
      {
        [
          {
            key: 1, to: '/settings/screen_name', title: '用户名', subTitle: user.name,
          },
          {
            key: 2, to: '/settings/phone', title: '手机', subTitle: String(user.phone),
          },
          {
            key: 3, to: '/settings/email', title: '电子邮件', subTitle: user.email,
          },
          {
            key: 4, to: '/settings/password', title: '密码',
          },
          {
            key: 5, to: '/settings/security', title: '安全',
          },
        ].map(genLinkItem)
      }
      <SubTitle>数据和权限</SubTitle>
      {
        [
          {
            key: 1, to: '/settings/language', title: '语言', subTitle: language,
          },
          {
            key: 2, to: '/settings/country', title: '国家/地区', subTitle: country,
          },
          {
            key: 3, to: '/settings/your_data', title: '你的数据',
          },
          {
            key: 4, to: '/settings/applications', title: '应用和会话',
          },
        ].map(genLinkItem)
      }
      <PrimaryGap />
      <LinkItem to="/settings/deactivate" title="停用你的账号" />
    </SettingsContainer>
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
