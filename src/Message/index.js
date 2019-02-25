import React from "react"
import CustomHr from "../BaseComponents/CustomHr"
import NavList from "../middleComponents/NavList"
import CustomHead from "../middleComponents/CustomHead"
import Text from "../BaseComponents/Text"
import CustomizedButton from "../BaseComponents/CustomizedButton";
import CurrentUserAvatar from '../container/CurrentUserAvatar'
import PullDownRefresh from "../middleComponents/PullDownRefresh";
import ScrollToggleHead from "../middleComponents/ScrollToggleHead";

function Message(props) {
  function handlRefresh() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000)
    })
  }
  return <ScrollToggleHead 
    head={
      <React.Fragment>
        <CustomHead 
          left={<CurrentUserAvatar xsmall/>}
          middle={<h2>私信</h2>} 
        />
        <NavList />
        <CustomHr />  
      </React.Fragment>        
    }
    main={
      <PullDownRefresh onRefresh={handlRefresh}>
        <div style={{padding: "37px 18px", textAlign: "center"}}>
          <div style={{marginBottom: "9px"}}>
            <Text xlarge bold>收发私信，有来有往</Text>
          </div>
          <div>
            <Text secondary>私信是你和其他 Twitter 用户的私密对话。分享推文、媒体和更多内容吧！</Text>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '18px'}}>
            <CustomizedButton filled>开始一段对话吧</CustomizedButton>
          </div>
        </div>
      </PullDownRefresh>
    }
  />
}
export default Message;
