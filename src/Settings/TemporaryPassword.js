import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: '临时密码',
};
function TemporayrPassword() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="临时密码" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default TemporayrPassword;
