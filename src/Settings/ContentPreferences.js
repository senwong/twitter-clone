import React from 'react';
import PropTypes from 'prop-types';
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
          key: 1, type: 'link', title: '探索设置', to: '/settings/search',
        },
        {
          key: 2, type: 'link', title: '趋势', to: '/settings/trends',
        },
      ],
    },
    {
      key: 2,
      title: '安全',
      list: [
        {
          key: 1, type: 'link', title: '已隐藏', to: '/settings/mute',
        },
        {
          key: 2, type: 'link', title: '已屏蔽账号', to: '/settings/blocked/all',
        },
      ],
    },
    {
      key: 3,
      title: '个性化与数据',
      list: [
        {
          key: 1, type: 'link', title: '个性化与数据', subTitle: '允许一些', to: '/settings/personalization',
        },
      ],
    },
  ],
};
export default function ContentPreferences({ personalization }) {
  console.log({ personalization });
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
  personalization: PropTypes.oneOf([0, 1, 2]),
};
ContentPreferences.defaultProps = {
  personalization: 0,
};
