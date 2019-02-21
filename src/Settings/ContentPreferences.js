import React from "react"
import { SettingsContainer, SubTitle, LinkItem, CheckBox } from "./index"
import Head from "../container/settingPages/Head"

const personalizationLabels= {0: "关闭", 1: "允许一些", 2: "允许全部"}
export default function ContentPreferences({ user, personalization }) {
  return (
    <SettingsContainer>
      <Head title="内容偏好" />
      <SubTitle>时间线</SubTitle>
      <CheckBox title="先展示最佳推文" subTitle="你最关心的推文会" />

      <SubTitle>探索</SubTitle>
      <LinkItem to="/settings/search" title="探索设置"/>
      <LinkItem to="/settings/trends" title="趋势"/>

      <SubTitle>安全</SubTitle>
      <LinkItem to="/settings/mute" title="已隐藏"/>
      <LinkItem to="/settings/blocked/all" title="已屏蔽账号"/>

      <SubTitle>安全</SubTitle>
      <LinkItem to="/settings/personaliza" title="个性化与数据" subTitle={personalizationLabels[personalization]}/>
    </SettingsContainer>
  )
}
