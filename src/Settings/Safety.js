import React from 'react';
import PropTypes from 'prop-types';
import {
  SettingsContainer, SubTitle, LinkItem, CheckBox,
} from './index';
import Head from '../container/settingPages/Head';

const personalizationLabels = { 0: '关闭', 1: '允许一些', 2: '允许全部' };

function generateLinkItem({
  key, to, title, subTitle,
}) {
  return <LinkItem key={key} to={to} title={title} subTitle={subTitle} />;
}
generateLinkItem.propTypes = {
  key: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
generateLinkItem.defaultProps = {
  subTitle: '',
};

export default function Safety({ user, personalization }) {
  return (
    <SettingsContainer>
      <Head title="隐私和安全" />
      <SubTitle>推文</SubTitle>
      <CheckBox title="保护你的推文" subTitle="只向关注你的人显示你的推文。选中后，你将需要批准每个关注者" />
      {
        [
          {
            key: 1, to: '/settings/location', title: '位置信息', subTitle: user.name,
          },
          {
            key: 2, to: '/settings/tagging', title: '照片圈人', subTitle: '任何人都能圈出你',
          },
        ].map(generateLinkItem)
      }

      <SubTitle>私信</SubTitle>
      <CheckBox title="接受任何人的私信" subTitle="只向关注你的人显示你的推文。选中后，你将需要批准每个关注者" />
      <CheckBox title="显示已读回执" subTitle="只向关注你的人显示你的推文。选中后，你将需要批准每个关注者" />

      <SubTitle>允许我认识的人找到我和联系人</SubTitle>
      <LinkItem to="/settings/contacts" title="允许我认识的人找到我和联系人" />

      <SubTitle>安全</SubTitle>
      <CheckBox title="显示可能含有敏感内容的媒体" subTitle="只向关注你的人显示你的推文。选中后，你将需要批准每个关注者" />
      <CheckBox title="将媒体标记为包含可能敏感内容的材料" subTitle="只向关注你的人显示你的推文。选中后，你将需要批准每个关注者" />
      {
        [
          {
            key: 1, to: '/settings/mute', title: '已隐藏',
          },
          {
            key: 2, to: '/settings/blocked/all', title: '已屏蔽账号',
          },
          {
            key: 3, to: '/settings/notifications', title: '通知',
          },
          {
            key: 4, to: '/settings/search', title: '搜索过滤',
          },
        ].map(generateLinkItem)
      }

      <SubTitle>个性化与数据</SubTitle>
      <LinkItem to="/settings/personalization" title="个性化与数据" subTitle={personalizationLabels[personalization]} />

      <SubTitle>Twitter团队版</SubTitle>
      <LinkItem to="/settings/teams" title="Twitter团队版" />
    </SettingsContainer>
  );
}
Safety.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  personalization: PropTypes.oneOf([0, 1, 2]).isRequired,
};
