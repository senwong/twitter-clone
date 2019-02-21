import React from "react"
import { SettingsContainer, SubTitle, LinkItem, CheckBox } from "./index"
import Head from "../container/settingPages/Head"

export default function Notifications({ user }) {
  return (
    <SettingsContainer>
      <Head title="通知" />
      <SubTitle>过滤</SubTitle>
      <CheckBox title="质量过滤" subTitle="从你的通知中过滤掉质量较低的内容。这不会过滤掉来自你关注的人或你近期互动过的账号的通知。了解更多"/>
      <LinkItem to="/settings/notificatons/advanced_filters" title="高级过滤"/>
      <LinkItem to="/settings/mute" title="已隐藏"/>

      <SubTitle>偏好</SubTitle>
      <LinkItem to="/settings/push_notificatons" title="推送通知"/>
      <LinkItem to="/settings/sms_notificatons" title="短信通知"/>
      <LinkItem to="/settings/email_notificatons" title="电子邮件通知"/>
    </SettingsContainer>
  )
}
