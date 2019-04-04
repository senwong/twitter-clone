import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: '登录认证',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1, type: 'checkbox', title: '登录认证', subTitle: '登录后，Twitter将要求你提供更多信息，以确认你的身份，保护你的账号免受损害。',
        },
      ],
    },
    {
      key: 2,
      title: '认证方式',
      list: [
        {
          key: 1, type: 'checkbox', title: '短信', subTitle: 'Twitter 会以文字短信形式向你的手机发送一个代码。你需要你的手机才能登录。',
        },
        {
          key: 2, type: 'checkbox', title: '手机安全应用', subTitle: '使用一个独立的安全应用以生成登录码。你需要这个应用的访问权限才能登录。',
        },
        {
          key: 3, type: 'checkbox', title: '安全密钥', subTitle: '你可以使用一个物理电子密钥来批准登录尝试。',
        },
      ],
    },
    {
      key: 3,
      title: '其他方式',
      list: [
        {
          key: 1, type: 'link', title: '备用码', subTitle: '保存一个备用码以防手机丢失。', to: '/twitter-clone/settings/account/login_verification/backup_code',
        },
        {
          key: 2, type: 'link', title: '临时密码', subTitle: '生成一个一次性密码，供登录第三方应用和服务时使用。', to: '/twitter-clone/settings/account/login_verification/temporary_password',
        },
      ],
    },
  ],
};
function LoginVerification() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="登录认证" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default LoginVerification;
