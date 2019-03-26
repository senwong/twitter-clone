import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: '推送通知',
};
function PushNotifications() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="推送通知" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default PushNotifications;
