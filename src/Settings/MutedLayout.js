import MakeNavLayout from './MakeNavLayout';

const links = [
  { to: '/twitter-clone/settings/muted/all', title: '全部' },
  { to: '/twitter-clone/settings/muted/following', title: '已关注' },
  { to: '/twitter-clone/settings/muted/not_following', title: '未关注' },
];
const MutedLayout = MakeNavLayout('已隐藏账号', links);
export default MutedLayout;
