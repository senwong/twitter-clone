import React from 'react';
import LayOut from './LayOut';
import MakeSettingPanel from './MakeSettingPanel';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';

const data = {
  title: '数据使用',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1, type: 'checkbox', title: '流量节省程序', subTitle: '选中后，Twitter 将使用较少的手机流量。',
        },
      ],
    },
    {
      key: 2,
      list: [
        {
          key: 1, type: 'link', title: '视频自动播放', subTitle: '仅开启无线网络时', to: '/twitter-clone/settings/autoplay',
        },
      ],
    },
  ],
};
export default function Data() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="数据使用" />}
      rightAside={(
        <MakeSettingPanel data={data} />
      )}
    />
  );
}
