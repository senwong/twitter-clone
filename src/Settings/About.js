import React from 'react';
import LayOut from './LayOut';
import MakeSettingPanel from './MakeSettingPanel';
import BackHeadWithUsername from '../middleComponents/BackHeadWithUsername';

const data = {
  title: '关于Twitter',
  list: [
    {
      key: 1,
      list: [
        {
          key: 1, type: 'link', title: '发布说明', to: '#',
        },
      ],
    },
    {
      key: 2,
      title: '法律',
      list: [
        {
          key: 1, type: 'link', title: 'Cookie', to: '#',
        },
        {
          key: 2, type: 'link', title: '广告信息', to: '#',
        },
        {
          key: 3, type: 'link', title: '条款', to: '#',
        },
        {
          key: 4, type: 'link', title: '隐私政策', to: '#',
        },
      ],
    },
    {
      key: 3,
      title: '其他',
      list: [
        {
          key: 1, type: 'link', title: '业务', to: '#',
        },
        {
          key: 2, type: 'link', title: '关于', to: '#',
        },
        {
          key: 3, type: 'link', title: '博客', to: '#',
        },
        {
          key: 4, type: 'link', title: '品牌', to: '#',
        },
        {
          key: 5, type: 'link', title: '工作', to: '#',
        },
        {
          key: 6, type: 'link', title: '市场营销', to: '#',
        },
        {
          key: 7, type: 'link', title: '帮助中心', to: '#',
        },
        {
          key: 8, type: 'link', title: '广告', to: '#',
        },
        {
          key: 9, type: 'link', title: '开发者', to: '#',
        },
        {
          key: 10, type: 'link', title: '状态', to: '#',
        },
        {
          key: 11, type: 'link', title: '目录', to: '#',
        },
      ],
    },
  ],
};
export default function About() {
  return (
    <LayOut
      narrowHead={<BackHeadWithUsername title="关于Twitter" />}
      rightAside={<MakeSettingPanel data={data} />}
    />
  );
}
