import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, } from "./index"
import Head from "../container/settingPages/Head"
import { CustomizedInput } from "./index"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import Text from "../BaseComponents/Text"

export default class Email extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  handleChange(e) {
    this.setState({email: e.target.value})
  }
  handleSave() {
    this.props.setEmail(this.state.email)
    this.props.history.goBack();
  }
  render() {
    return (
      <SettingsContainer>
        <Head title="更改电子邮件"/>
        <PrimaryGap/>
        <CustomizedInput
          label="现用"
          readOnly
          value={this.props.email}
          onChange={null}
        />
        <CustomizedInput
          label="新"
          value={this.state.email}
          onChange={this.handleChange}
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
            onClick={this.handleSave} 
            disabled={
              this.state.email === this.props.email 
              || !isEmail(this.state.email)
            }
          >保存</CustomizedButton>
        </div>
      </SettingsContainer>
    )
  }
}
function isEmail(value) {
  const reg = /^[a-zA-Z.]+@[a-zA-Z]+.[a-zA-Z]+$/
  return reg.test(value)
}