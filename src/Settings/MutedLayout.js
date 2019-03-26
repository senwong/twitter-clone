import MakeNavLayout from './MakeNavLayout';

const links = [
  { to: '/settings/muted/all', title: '全部' },
  { to: '/settings/muted/following', title: '已关注' },
  { to: '/settings/muted/not_following', title: '未关注' },
];
const MutedLayout = MakeNavLayout('已隐藏账号', links);
export default MutedLayout;
