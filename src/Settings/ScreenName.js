
import React from "react"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import { SettingsContainer, SubTitle, } from "./index"
import Head from "../container/settingPages/Head"
import { CustomizedInput } from "./index"
import { getRecommendScreenName } from "../dataMock"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import Text from "../BaseComponents/Text"

export default class ScreenName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      recommendNames: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleChange(e) {
    this.setState({name: e.target.value});
  }
  componentDidMount() {
    this.setState({recommendNames: getRecommendScreenName()})
  }
  handleSave() {
    this.props.setName(this.state.name);
    this.props.history.goBack();
  }
  render() {
    return (
      <SettingsContainer>
        <Head title="更改用户名"/>
        <CustomizedInput
          value={this.state.name} 
          label="用户名" 
          placeholder="选择你的用户名"
          onChange={this.handleChange} 
          WarningLabel={() => <Warning value={this.state.name}/>}
        />
        <SubTitle>建议</SubTitle>
        <div style={{padding: "14px 9px", backgroundColor: "white"}}>
          {
            this.state.recommendNames.map((name, i) =>
              <div key={i} onClick={() => this.setState({name: name})} style={{marginBottom: "9px"}} >
                <Text primary >{name}</Text>
              </div>
            )
          }
        </div>
        <PrimaryGap/>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: "9px", backgroundColor: 'white'}}>
          <CustomizedButton 
            filled 
            onClick={this.handleSave} 
            disabled={
              !this.state.name || 
              this.state.name === this.props.name ||
              this.state.name.length <= 4 || 
              this.state.name.length >= 15
            }
          >保存</CustomizedButton>
        </div>
      </SettingsContainer>
    )
  }
}
function Warning({value}) {
  return (
      <div>
      {
        (!value || value.length <= 4) && 
        <Text small warning >你的用户名长度必须大于4个字符</Text>
      }
      {
        value && value.length >= 15 && 
        <Text small warning >你的用户名长度必须少于15个字符</Text>
      }
    </div>
  )
}
