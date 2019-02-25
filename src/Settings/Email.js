import React, { useState } from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, } from "./index"
import Head from "../container/settingPages/Head"
import { CustomizedInput } from "./index"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import Text from "../BaseComponents/Text"

export default function Email(props) {
  const [email, setEmail] = useState('');
  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleSave() {
    props.setEmail(email)
    props.history.goBack();
  }
  return (
    <SettingsContainer>
      <Head title="更改电子邮件"/>
      <PrimaryGap/>
      <CustomizedInput
        label="现用"
        readOnly
        value={props.email}
        onChange={null}
      />
      <CustomizedInput
        label="新"
        value={email}
        onChange={handleChange}
        autoFocus
      />
      <PrimaryGap />
      <div style={{padding: "9px", backgroundColor: "white"}}>
        <Text secondary >
        你的邮件地址不在你在 Twitter 上的公开个人资料中显示。其他人将能够以邮件地址或手机号码找到你。你可以随时更改这些设置。
        </Text>
      </div>
      <PrimaryGap/>
      <div style={{display: 'flex', justifyContent: 'flex-end', padding: "9px", backgroundColor: 'white'}}>
        <CustomizedButton 
          filled 
          onClick={handleSave} 
          disabled={
            email === props.email 
            || !isEmail(email)
          }
        >保存</CustomizedButton>
      </div>
    </SettingsContainer>
  )
}

function isEmail(value) {
  const reg = /^[a-zA-Z.]+@[a-zA-Z]+.[a-zA-Z]+$/
  return reg.test(value)
}