import React from 'react';
import NavigationBar from '../middleComponents/NavigationBar';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import Text from '../BaseComponents/Text';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import CurrentUserAvatar from '../container/CurrentUserAvatar';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import LayOut from './LayOut';
import RightAside from './RightAside';

function Message() {
  function handlRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
  return (
    <LayOut
      reverse
      head={(
        <>
          <HeadBarLayOut
            left={<CurrentUserAvatar xsmall />}
            middle={<Text large>私信</Text>}
          />
          <NavigationBar />
        </>
      )}
      main={(
        <PullDownRefresh onRefresh={handlRefresh}>
          <div style={{ padding: '37px 18px', textAlign: 'center' }}>
            <div style={{ marginBottom: '9px' }}>
              <Text xlarge bold>收发私信，有来有往</Text>
            </div>
            <div>
              <Text secondary>私信是你和其他 Twitter 用户的私密对话。分享推文、媒体和更多内容吧！</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px' }}>
              <CustomizedButton filled>开始一段对话吧</CustomizedButton>
            </div>
          </div>
        </PullDownRefresh>
      )}
      rightAside={(
        <RightAside />
      )}
    />
  );
}
export default Message;
