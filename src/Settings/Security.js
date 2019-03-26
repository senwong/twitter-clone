import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: '安全',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1, type: 'link', title: '登录认证', to: '/settings/account/login_verification',
        },
        {
          key: 2, type: 'checkbox', title: '密码重设保护', subTitle: '如果勾选此复选框，你将需要验证附加信息，之后方可只使用你的 @用户名 申请密码重置。如果你的账号设置了手机号，将要求你验证该手机号，之后方可只使用你的邮件地址申请密码重置。',
        },
      ],
    },
  ],
};
function Security() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="安全" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Security;
