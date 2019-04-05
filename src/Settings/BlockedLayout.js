import MakeNavLayout from './MakeNavLayout';

const links = [
  {
    to: '/settings/blocked/all', title: '全部', ariaLabel: 'View all blocked account',
  },
  {
    to: '/settings/blocked/imported', title: '导入', ariaLabel: 'View imported blocked account',
  },
];
const BlockedLayout = MakeNavLayout('已屏蔽账号', links);
export default BlockedLayout;
