import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, SubTitle, LinkItem } from "./index"
import Head from "../container/settingPages/Head"

export default function Account({user, language, country}) {
  return (
    <SettingsContainer>
      <Head title="账号" />
      <SubTitle>登录和安全</SubTitle>
      {
        [
          {url: "/settings/screen_name", title: "用户名", subTitle: user.name},
          {url: "/settings/phone", title: "手机", subTitle: user.phone},
          {url: "/settings/email", title: "电子邮件", subTitle: user.email},
          {url: "/settings/password", title: "密码"},
          {url: "/settings/security", title: "安全"},
        ].map((item, i) => <LinkItem key={i} to={item.url} title={item.title} subTitle={item.subTitle} />)
      }
      <SubTitle>数据和权限</SubTitle>
      {
        [
          {url: "/settings/language", title: "语言", subTitle: language},
          {url: "/settings/country", title: "国家/地区", subTitle: country},
          {url: "/settings/your_data", title: "你的数据"},
          {url: "/settings/applications", title: "应用和会话"},
        ].map((item, i) => <LinkItem key={i} to={item.url} title={item.title} subTitle={item.subTitle} />)
      }
      <PrimaryGap/>
      <LinkItem to={"/settings/deactivate"} title="停用你的账号" />
    </SettingsContainer>
  )
}
