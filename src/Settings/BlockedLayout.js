import MakeNavLayout from './MakeNavLayout';

const links = [
  { to: '/twitter-clone/settings/blocked/all', title: '全部' },
  { to: '/twitter-clone/settings/blocked/imported', title: '导入' },
];
const BlockedLayout = MakeNavLayout('已屏蔽账号', links);
export default BlockedLayout;
