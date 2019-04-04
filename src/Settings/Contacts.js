import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: '允许我认识的人找到我和联系人',
  list: [
    {
      key: 1,
      title: '允许我认识的人找到我',
      list: [
        { key: 1, type: 'checkbox', title: '允许其他人通过你的邮件地址找到你' },
        { key: 2, type: 'checkbox', title: '允许其他人通过你的手机号码找到你' },
      ],
    },
    {
      key: 2,
      title: '联系人',
      list: [
        {
          key: 1,
          type: 'link',
          title: '管理联系人',
          to: '/twitter-clone/settings/contacts_dashboard',
        },
      ],
    },
  ],
};
function Contacts() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="允许认识我的人找到我" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Contacts;
