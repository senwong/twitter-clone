import React from "react"
import { Link } from "react-router-dom"
import { SettingIcon, } from "../BaseComponents/SVGIcons"
import CustomHr from "../BaseComponents/CustomHr"
import NavList from "../middleComponents/NavList"
import CustomHead from "../middleComponents/CustomHead"
import { Switch, Route } from 'react-router'
import { LinkList } from "../middleComponents/NavList"
import { NotifyCard } from "../middleComponents/Cards"
import { getNotifications } from "../dataMock";
import Text from "../BaseComponents/Text";
import CurrentUserAvatar from '../container/CurrentUserAvatar'
import PullDownRefresh from "../middleComponents/PullDownRefresh";
import ScrollToggleHead from "../middleComponents/ScrollToggleHead";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.links = [
      {to: this.props.match.url, title: "全部", exact: true},
      {to: this.props.match.url + "/mentions", title: "提及"},
    ];
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000)
    })
  }
  render() {
    return (
      <ScrollToggleHead 
        head={
          <React.Fragment>
            <CustomHead 
              left={<CurrentUserAvatar xsmall />}
              middle={<Text bold large>通知</Text>} 
              right={<Link to="/settings/notifications"><SettingIcon small primary /></Link>} 
            />
            <NavList />
            <CustomHr />            
          </React.Fragment>          
        }
        main={
          <React.Fragment>
            <LinkList links={this.links}/>
            <PullDownRefresh onRefresh={this.handleRefresh}>
              <Switch>
                <Route exact path={this.props.match.url} component={AllNotifications}/>
                <Route path={this.props.match.url + "/mentions"} component={Mentions}/>
              </Switch>
            </PullDownRefresh>
          </React.Fragment>
        }
      />
    )
  }
};
class AllNotifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notifications: []
    }
  }
  componentDidMount() {
    this.setState({notifications: getNotifications()})
  }
  render() {
    return (
      <div>
        {
          this.state.notifications.map(n => <NotifyCard key={n.id} notification={n}/>)
        }
      </div>
    )
  }
}
function Mentions() {
  return (
    <div style={{padding: "37px 18px", textAlign: "center"}}>
      <div style={{margin: "0 0 9px"}}>
        <Text xlarge bold >这里暂时没有内容</Text>
      </div>
      <Text secondary >当有人提及你时，你会在这里找到它。</Text>
    </div>
  )
}