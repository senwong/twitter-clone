import React from "react"
import { Link, } from "react-router-dom"
import { ArrowRight, CheckedIcon } from "../BaseComponents/SVGIcons"
import Text from "../BaseComponents/Text"
import Head from "../container/settingPages/Head"
import styled, { css } from 'styled-components'

const Container = styled.div`
  background-color: rgb(230, 236, 240);
  height: 100%;
`;
export default function Settings(props){
  return (
    <Container>
      <Head title="设置" />
      <SubTitle>@{props.user.name}</SubTitle>
      {
        [
          {url: props.match.url + "/account", title: "账号"},
          {url: props.match.url + "/safety", title: "隐私和安全"},
          {url: props.match.url + "/notifications", title: "通知"},
          {url: props.match.url + "/content_preferences", title: "内容偏好"},
        ].map((item, i) => <LinkItem key={i} to={item.url} title={item.title}/>)
      }
      <SubTitle>通用</SubTitle>
      {
        [
          {url: props.match.url + "/data", title: "数据使用"},
          {url: props.match.url + "/accessibility", title: "辅助功能"},
          {url: props.match.url + "/about", title: "关于应用"},
        ].map((item, i) => <LinkItem key={i} to={item.url} title={item.title}/>)
      }
    </Container>
  )
}
export function SettingsContainer(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}
const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-Items: center;
  padding: 14px 9px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  color: rgb(20, 23, 26);
  line-height: 1.3125;
  text-decoration: none;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
export function LinkItem(props) {
  return (
    <Item to={props.to}>
      <div>
        <Text>{props.title}</Text><br/>
        {props.subTitle && <Text small secondary >{props.subTitle}</Text>}
      </div>
      <ArrowRight xsmall secondary/>
    </Item>
  )
}
export function SubTitle(props) {
  return (
    <div style={{padding: "14px 9px"}}>
      <Text large secondary >{props.children}</Text>
    </div>
  )
}

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid rgb(230, 236, 240);
  background-color: rgb(255, 255, 255);
  padding: 14px 9px;
`;
const Left = styled.div`
  flex: 1 1 0;
`;
export function CheckBox(props) {
  return (
    <CheckBoxContainer>
      <Left>
        <Text>{props.title}</Text>
        <div style={{paddingTop: "9px"}}>
          <Text secondary small >{props.subTitle}</Text>
        </div>
      </Left>
      <CheckBoxInput />
    </CheckBoxContainer>
  )
}

const CheckBoxInputContainer = styled.div`
  position: relative;
  padding: 9px;
`;
const FakeCheckBoxInput = styled.div`
  height: 18px;
  width: 18px;
  border: 2px solid rgb(101, 119, 134);
  margin: -9px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
	align-items: center;
  justify-content: center;
  ${props => props.checked && css`
    border-color: rgb(29, 161, 242);
    background-color: rgb(29, 161, 242);
  `}
`;
const CheckBoxInput = styled.input`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
`;
export class CheckboxInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({checked: !this.state.checked})
  }
  render() {
    return (
      <CheckBoxInputContainer>
        <FakeCheckBoxInput checked={this.state.checked} >
          {this.state.checked && <CheckedIcon xsmall white/>}
        </FakeCheckBoxInput>
        <CheckboxInput type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
      </CheckBoxInputContainer>
    )
  }
}

const CustomizedInputContainer = styled.div`
  padding: 9px;
  background-color: rgb(255, 255, 255);
`;
const Input = styled.div`
  border: none;
  border-bottom: 1px solid rgb(170, 184, 194);;
  margin-bottom: 1px;
  font-size: 18px;
  line-height: 1.3125;
  color: rgb(20, 23, 26);
  display: block;
  width: 100%;
  padding: 9px 0;
  :read-only{
    color: rgb(101, 119, 134);
  }
  :not(:read-only):focus {
    border-bottom: 2px solid rgb(29, 161, 242);
    margin-bottom: 0;
    outline: none;
  }
`;
export function CustomizedInput({label, WarningLabel, ...props}) {
  return (
    <CustomizedInputContainer>
      <label htmlFor="input">
        <Text secondary >{label}</Text>
      </label>
      <Input type="text" name="" id="input" {...props} />
      {WarningLabel && <WarningLabel />}
    </CustomizedInputContainer>
  )    
}
