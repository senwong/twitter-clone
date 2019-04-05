import MakeNavLayout from './MakeNavLayout';

const links = [
  {
    to: '/settings/muted/all', title: '全部', ariaLabel: 'View all muted account',
  },
  {
    to: '/settings/muted/following', title: '已关注', ariaLabel: 'View following muted account',
  },
  {
    to: '/settings/muted/not_following', title: '未关注', ariaLabel: 'View not_following muted account',
  },
];
const MutedLayout = MakeNavLayout('已隐藏账号', links);
export default MutedLayout;
