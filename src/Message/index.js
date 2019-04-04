import React from 'react';
import Text from '../BaseComponents/Text';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import Layout from '../layout/Layout';
import RightAside from './RightAside';
import HomePageNarrowHead from '../layout/HomePageNarrowHead';

function Message() {
  function handlRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
  return (
    <Layout
      reverse
      narrowHead={(
        <HomePageNarrowHead
          middle={<Text large>私信</Text>}
        />
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
