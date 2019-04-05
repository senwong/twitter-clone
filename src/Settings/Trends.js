import React from 'react';
import LayOut from './LayOut';
import MakeSettingPanel from './MakeSettingPanel';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';

const data = {
  title: '趋势',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1, type: 'checkbox', title: '你的趋势', subTitle: '根据你的位置和关注的人对趋势进行个性化。 ',
        },
      ],
    },
    {
      key: 2,
      list: [
        {
          key: 1, type: 'link', title: '更改位置', subTitle: '全球 ', to: '/settings/trends/location',
        },
      ],
    },
  ],
};
function Trends() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="趋势" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
export default Trends;
