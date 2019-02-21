import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, LinkItem, CheckBox } from "./index"
import Head from "../container/settingPages/Head"

export default function Data(props) {
  return (
    <SettingsContainer>
      <Head title="数据使用" />
      <CheckBox title="流量节省程序" subTitle="选中后，twitter将使用较少的手机流量"/>
      <PrimaryGap />
      <LinkItem to="" title="视频自动播放" subTitle="仅开启无线网络时"/>
    </SettingsContainer>
  )
}
