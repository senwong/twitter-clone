import React from 'react';
import { SettingsContainer, LinkItem, CheckBox } from './index';
import Head from '../container/settingPages/Head';

export default function Security() {
  return (
    <SettingsContainer>
      <Head title="安全" />
      <LinkItem to="/settings/account/login_verification" title="登录认证" />
      <CheckBox title="密码重设保护" subTitle="如果勾选此复选框，你将需要验证附加信息，之后方可只使用你的 @用户名 申请密码重置。如果你的账号设置了手机号，将要求你验证该手机号，之后方可只使用你的邮件地址申请密码重置。" />
    </SettingsContainer>
  );
}
