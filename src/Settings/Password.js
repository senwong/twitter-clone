import React from 'react';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';
import LayOut from './LayOut';

export default function Password() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="更改密码" />}
      rightAside={<h1>更改密码</h1>}
    />
  );
}
