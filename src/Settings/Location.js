import React from 'react';
import LayOut from './LayOut';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import MakeSettingPanel from './MakeSettingPanel';
import DeleteButton from './DeleteButton';

const data = {
  title: '位置信息',
  list: [
    {
      key: 1,
      list: [
        { key: 1, type: 'checkbox', title: '向我的推文添加位置信息' },
      ],
    },
  ],
};
function Location() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="位置信息" />}
      rightAside={(
        <>
          <MakeSettingPanel data={data} />
          <DeleteButton>删除所有位置信息</DeleteButton>
        </>
      )}
    />
  );
}
export default Location;
