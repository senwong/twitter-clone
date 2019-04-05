import React from 'react';
import LayOut from './LayOut';
import MakeSettingPanel from './MakeSettingPanel';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';

const data = {
  title: '通知',
  list: [
    {
      key: 1,
      title: '过滤',
      list: [
        {
          key: 1, type: 'checkbox', title: '质量过滤', subTitle: '从你的通知中过滤掉质量较低的内容。这不会过滤掉来自你关注的人或你近期互动过的账号的通知。',
        },
        {
          key: 2, type: 'link', title: '高级过滤', to: '/settings/notifications/advanced_filters',
        },
        {
          key: 3, type: 'link', title: '已隐藏', to: '/settings/mute',
        },
      ],
    },
    {
      key: 2,
      title: '偏好',
      list: [
        {
          key: 1, type: 'link', title: '推送通知', to: '/settings/push_notifications',
        },
        {
          key: 2, type: 'link', title: '短信通知', to: '/settings/sms_notifications',
        },
        {
          key: 3, type: 'link', title: '电子邮件通知', to: '/settings/email_notifications',
        },
      ],
    },
  ],
};

export default function Notifications() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="通知" />}
      rightAside={(
        <MakeSettingPanel data={data} />
      )}
    />
  );
}
