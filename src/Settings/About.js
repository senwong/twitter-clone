import React from "react"
import { SubTitle, LinkItem, SettingsContainer } from "./index"
import Head from "../container/settingPages/Head"

export default function About(props) {
  return (
    <SettingsContainer>
      <Head title="关于Twitter"/>
      <LinkItem to="" title="发布说明"/>

      <SubTitle>法律</SubTitle>
      <LinkItem to="" title="广告信息"/>
      <LinkItem to="" title="条款"/>
      <LinkItem to="" title="隐私政策"/>
      <LinkItem to="" title="Cookie"/>

      <SubTitle>其他</SubTitle>
      {
        [
          {url: "", title: "帮助中心"},
          {url: "", title: "博客"},
          {url: "", title: "工作"},
          {url: "", title: "关于"},
          {url: "", title: "广告"},
          {url: "", title: "开发者"},
          {url: "", title: "目录"},
          {url: "", title: "品牌"},
          {url: "", title: "市场营销"},
          {url: "", title: "业务"},
          {url: "", title: "状态"},
        ].map((item, i) => <LinkItem key={i} to={item.url} title={item.title}/>)
      }
    </SettingsContainer>
  )
}
