import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LayOut from './LayOut';
import MakeSettingPanel from './MakeSettingPanel';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
// const personalizationLabels = { 0: '关闭', 1: '允许一些', 2: '允许全部' };

const data = () => ({
  title: '隐私和安全',
  list: [
    {
      key: 1,
      title: '推文',
      list: [
        {
          key: 1, type: 'checkbox', title: '保护你的推文', subTitle: '只向关注你的人显示你的推文。选中后，你将需要批准每个新关注者。',
        },
        {
          key: 2, type: 'link', title: '位置信息', to: '/twitter-clone/settings/location',
        },
        {
          key: 3, type: 'link', title: '照片圈人', subTitle: '关闭', to: '/twitter-clone/settings/tagging',
        },
      ],
    },
    {
      key: 2,
      title: '私信',
      list: [
        {
          key: 1, type: 'checkbox', title: '接收任何人的私信', subTitle: '你将能接收来自 Twitter 上任何人的私信，即使你没有关注他们。',
        },
        {
          key: 2, type: 'checkbox', title: '显示已读回执', subTitle: '当有人向你发私信时，对话中的人就会知道你何时已读。若关闭此设置，你将无法看到来自他人的已读回执。',
        },
      ],
    },
    {
      key: 3,
      title: '允许我认识的人找到我和联系人',
      list: [
        {
          key: 1, type: 'link', title: '允许我认识的人找到我和联系人', to: '/twitter-clone/settings/contacts',
        },
      ],
    },
    {
      key: 4,
      title: '安全',
      list: [
        {
          key: 1, type: 'checkbox', title: '显示可能含有敏感内容的媒体',
        },
        {
          key: 2, type: 'checkbox', title: '将媒体标记为包含可能敏感内容的材料',
        },
        {
          key: 3, type: 'link', title: '已隐藏', to: '/twitter-clone/settings/mute',
        },
        {
          key: 4, type: 'link', title: '已屏蔽账号', to: '/twitter-clone/settings/blocked/all',
        },
        {
          key: 5, type: 'link', title: '通知', to: '/twitter-clone/settings/notifications',
        },
        {
          key: 6, type: 'link', title: '搜索过滤', to: '/twitter-clone/settings/search',
        },
      ],
    },
    {
      key: 5,
      title: '个性化与数据',
      list: [
        {
          key: 1, type: 'link', title: '个性化与数据', subTitle: '允许一些', to: '/twitter-clone/settings/personalization',
        },
      ],
    },
    {
      key: 6,
      title: 'Twitter团队版',
      list: [
        {
          key: 1, type: 'link', title: 'Twitter团队版', subTitle: '任何人都能把你添加到他们的团队中', to: '/twitter-clone/settings/teams',
        },
      ],
    },
  ],
});

function Safety({ user }) {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="隐私和安全" />}
      rightAside={(
        <MakeSettingPanel data={data(user)} />
      )}
    />
  );
}
Safety.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    personalization: PropTypes.oneOf([0, 1, 2]).isRequired,
  }).isRequired,
};
const mapStateToProps = state => ({
  user: state.currentUser,
});
export default connect(mapStateToProps)(Safety);
