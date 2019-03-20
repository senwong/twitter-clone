import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  HomeIcon, ExploreIcon, NotifyIcon, MessageIcon,
} from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: white;
  z-index: 1;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  flex: 1 1 0;
  text-align: center;
  color: rgb(101, 119, 134);
  border-bottom: 2px solid transparent;
  padding: 8px;
  text-decoration: none;
  &.active{
    border-bottom-color: rgb(29, 161, 242);
    color: rgb(29, 161, 242);
  }
`;
export default function NavigationBar() {
  const links = [
    { to: '/home', title: <HomeIcon middle /> },
    { to: '/explore', title: <ExploreIcon middle /> },
    { to: '/notifications', title: <NotifyIcon middle /> },
    { to: '/messages', title: <MessageIcon middle /> },
  ];
  return <LinkList links={links} />;
}

export function LinkList({ links }) {
  return (
    <Wrapper>
      {
        links.map(({ to, title, exact }) => (
          <StyledNavLink key={to} to={to} exact={exact}>
            { typeof title === 'string'
              ? <Text secondary>{title}</Text>
              : title
            }
          </StyledNavLink>
        ))
      }
    </Wrapper>
  );
}
LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    exact: PropTypes.bool,
  })).isRequired,
};
