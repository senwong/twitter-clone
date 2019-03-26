import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';
import DeleteButton from './DeleteButton';

const data = {
  title: '管理联系人',
};
function ContactsDashboard() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="管理联系人" />}
      rightAside={(
        <>
          <MakeSettingPanel data={data} />
          <DeleteButton>删除所有联系人</DeleteButton>
        </>
      )}
    />
  );
}
export default ContactsDashboard;
