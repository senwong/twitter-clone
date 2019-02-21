import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, SubTitle, LinkItem, CheckBox } from "./index"
import Head from "../container/settingPages/Head"

export default function Accessibility(props) {
  return (
    <SettingsContainer>
      <Head title="辅助功能" />
      <SubTitle>视力</SubTitle>
      <h1>todo </h1>
      <PrimaryGap/>
      <CheckBox title="撰写图片描述" subTitle="添加为视障人士说明图片内容的功能。了解更多"/>

      <SubTitle>动态效果</SubTitle>
      <LinkItem to="" title="视频自动播放" subTitle="仅开启无线网络时"/>
    </SettingsContainer>
  )
}
