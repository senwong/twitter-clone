import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: '短信通知',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1, type: 'link', title: '手机号码', to: '/settings/phone',
        },
      ],
    },
  ],
};
function SMSNotifications() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="短信通知" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default SMSNotifications;
