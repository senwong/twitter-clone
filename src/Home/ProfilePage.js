import React from "react";
import { withRouter } from "react-router-dom"
import Avatar from "../BaseComponents/Avatar";
import CustomHr from "../BaseComponents/CustomHr"
import { Person, List, BookMark, Momments } from "../BaseComponents/SVGIcons";
import ToggleButton from "../BaseComponents/ToggleButton"
import Text from '../BaseComponents/Text'
import styled from 'styled-components'

const SidePage = styled.div`
  background-color: rgba(0, 0, 0, 0.07);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 2;
`;
const SideMenu = styled.div`
  background-color: rgb(255, 255, 255);
  height: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
`;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.menu = null;
    this.state = {
      isDataSaver: false,
      isDarkMode: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSettingClick = this.handleSettingClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleDataSaverClick = this.handleDataSaverClick.bind(this);
    this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
  }
  handleClick(e) {
    if (this.menu &&  e.target !== this.menu && !this.menu.contains(e.target)) {
      this.props.toggle();
    }
  }
  handleSettingClick() {
    this.props.history.push("/settings")
    this.props.toggle();
  }
  handleUserClick() {
    this.props.history.push("/"+this.props.user.name)
    this.props.toggle();
  }
  handleDataSaverClick() {
    this.setState({
      isDataSaver: !this.state.isDataSaver,
    })
  }
  handleDarkModeClick() {
    this.setState({
      isDarkMode: !this.state.isDarkMode,
    })
  }
  render() {
    const { user } = this.props;
    return (
      <SidePage onClick={this.handleClick}>
        <SideMenu ref={ el => this.menu = el }>
          <div style={{padding: "9px 18px 0"}} onClick={this.handleUserClick}>
            <Avatar user={user}/>
          </div>
          <div style={{padding: "9px 18px 0"}} onClick={this.handleUserClick}>
            <Text bold>{user.nickName}</Text><br/>
            <Text secondary>@{user.name}</Text>
          </div>
          <div style={{padding: "9px 18px"}}>
            <div style={{display: "inline-block", marginRight: "9px"}}>
              <Text bold>{user.following} </Text>正在关注
            </div>
            <div style={{display: "inline-block"}}>
              <Text bold>{user.followers} </Text>关注者
            </div>
          </div>
          <ListItem left={<Person xsmall secondary/>} middle={<div>个人资料</div>}/>
          <ListItem left={<List  xsmall secondary/>} middle={<div>列表</div>}/>
          <ListItem left={<BookMark xsmall secondary/>} middle={<div>书签</div>}/>
          <ListItem left={<Momments xsmall secondary/>} middle={<div>瞬间</div>}/>
          <CustomHr />
          <ListItem middle={<div onClick={ this.handleSettingClick }>设置和隐私</div>}/>
          <ListItem middle={<div>帮助中心</div>}/>
          <ListItem middle={<div>登出</div>}/>
          <CustomHr />
          <ListItem 
            middle={
              <div style={{marginRight: "55px"}}>流量节省程序</div>
            } 
            right={
              <div style={{margin: "0 9px"}}>
                <ToggleButton checked={this.state.isDataSaver} onClick={this.handleDataSaverClick}/>
              </div>
              }
          />
          <ListItem 
            middle={
              <div style={{marginRight: "55px"}}>夜间模式</div>
            } 
            right={
              <div style={{margin: "0 9px"}}>
                <ToggleButton checked={this.state.isDarkMode} onClick={this.handleDarkModeClick}/>
              </div>
            }
          />
        </SideMenu>
      </SidePage>
    );
  }
}

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
`;
const ListItemLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
`;
const ListItemMiddle = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;
const ListItemRight = styled.div`
  display: flex;
  align-items: center;
`;
function ListItem(props) {
  return (
    <ListItemContainer >
      {
        props.left && <ListItemLeft>{props.left}</ListItemLeft>
      }
      {
        props.middle && <ListItemMiddle>{props.middle}</ListItemMiddle>
      }
      {
        props.right && <ListItemRight>{props.right}</ListItemRight>
      }
    </ListItemContainer>
  )
}

export default withRouter(ProfilePage)