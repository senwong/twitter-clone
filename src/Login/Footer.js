import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const links = [{
  id: 0,
  href: 'https://twitter.com/about',
  title: '关于',
}, {
  id: 1,
  href: 'https://support.twitter.com/',
  title: '帮助中心',
}, {
  id: 2,
  href: 'https://blog.twitter.com/',
  title: '博客',
}, {
  id: 3,
  href: 'http://status.twitter.com/',
  title: '状态',
}, {
  id: 4,
  href: 'https://about.twitter.com/careers',
  title: '工作机会',
}, {
  id: 5,
  href: 'https://twitter.com/tos',
  title: '条款',
}, {
  id: 6,
  href: 'https://twitter.com/privacy',
  title: '隐私政策',
}, {
  id: 7,
  href: 'https://support.twitter.com/articles/20170514',
  title: 'Cookies',
}, {
  id: 8,
  href: 'https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html',
  title: '广告信息',
}, {
  id: 9,
  href: 'https://about.twitter.com/press/brand-assets',
  title: '商标',
}, {
  id: 10,
  href: 'https://about.twitter.com/products',
  title: '应用',
}, {
  id: 11,
  href: 'https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise',
  title: '广告',
}, {
  id: 12,
  href: 'https://marketing.twitter.com/',
  title: '市场营销',
}, {
  id: 13,
  href: 'https://business.twitter.com/',
  title: '企业',
}, {
  id: 14,
  href: 'https://dev.twitter.com/',
  title: '开发者',
}, {
  id: 15,
  href: 'https://twitter.com/i/directory/profiles',
  title: '目录',
}, {
  id: 16,
  href: 'https://twitter.com/settings/personalization',
  title: '设置',
}];

const Container = styled.div`
  border-top: 1px soid#e6ecf0;
  padding: 11px ;
  border-top: 1px solid #e6ecf0;
`;
const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Item = styled.li`
  padding: 0 9px 0 9px;
  list-style: none;
`;
const StyledLink = styled(Link)`
  color: #aab8c2;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-color: #aab8c2;
  }
`;
const CopyRight = styled.li`
  color: #aab8c2;
  font-size: 12px;
  padding: 0 9px 0 9px;
  list-style: none;
`;
function Footer() {
  return (
    <Container>
      <List>
        {
          links.map(({ id, href, title }) => (
            <Item key={id}>
              <StyledLink to={href}>{title}</StyledLink>
            </Item>
          ))
        }
        <CopyRight>
          &copy;&nbsp;
          {(new Date()).getFullYear()}
          &nbsp;Twitter
        </CopyRight>
      </List>
    </Container>
  );
}
export default Footer;
