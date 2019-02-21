import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer } from "./index";
import Head from "../container/settingPages/Head"
import { CustomizedInput } from "./index"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import Text from "../BaseComponents/Text"

export default class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPhone: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this);
  }
  handleChange(e) {
    this.setState({newPhone: e.target.value})
  }
  handleSave() {
    this.props.setPhone(this.state.newPhone);
    this.props.history.goBack();
  }
  render() {
    return (
      <SettingsContainer>
        <Head title="更改手机" />
        <CustomizedInput
          label="现用"
          value={this.props.phone}
          readOnly
          onChange={null}
        />
        <CustomizedInput
          label="新"
          value={this.state.newPhone}
          onChange={this.handleChange}
          autoFocus
          WarningLabel={() => <Warning validate={isPhone(this.state.newPhone)}/>}
        />
        <PrimaryGap/>
        <div style={{padding: "9px", backgroundColor: "white"}}>
          <Text secondary >
          我们将发送验证码到此手机号，可能收取标准短信费用。
          其他人将能够通过你的电子邮件地址或手机号码找到你。你可以随时更改这些设置。
          </Text>
        </div>
        <PrimaryGap/>
        <div style={{padding: "14px 9px", backgroundColor: "white", textAlign: "center"}}>
          <Text warning>
            删除手机号码
          </Text>
        </div>
        <PrimaryGap/>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: "9px", backgroundColor: 'white'}}>
          <CustomizedButton 
            filled 
            onClick={this.handleSave} 
            disabled={
              this.state.newPhone === this.props.phone 
              || !isPhone(this.state.newPhone)
            }
          >保存</CustomizedButton>
        </div>
      </SettingsContainer>
    )
  }
}
function Warning({validate}) {
  return (
      <div>
      {
        !validate && 
        <Text small warning >请输入一个有效的电话号码</Text>
      }
    </div>
  )
}

function isPhone(value) {
  const reg = /^[+86]?[\b]*[0-9]{11}$/
  return reg.test(value);
}