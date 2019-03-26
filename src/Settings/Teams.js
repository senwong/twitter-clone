import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';

const data = {
  title: 'Twitter 团队版',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1,
          type: 'radio-group',
          title: 'Twitter 团队版',
          subTitle: '机构可以邀请任何人，使用 TweetDeck 中的团队功能，从他们的账号发推。',
          radios: [
            { key: 1, title: '允许任何人把你添加到他们的团队中' },
            { key: 2, title: '只允许你关注的人把你添加到他们的团队中' },
            { key: 3, title: '不允许任何人把你添加到他们的团队中' },
          ],
        },
      ],
    },
  ],
};
function Teams() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="Twitter 团队版" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Teams;
