import React from "react"
import { NavLink } from "react-router-dom"
import { HomeIcon,  ExploreIcon,  NotifyIcon,  MessageIcon, } from "../BaseComponents/SVGIcons"
import styled from 'styled-components'
import Text from "../BaseComponents/Text"

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid rgb(230, 236, 240);
  position: relative;
  background-color: white;
  z-index: 1;
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
export default function NavList(props) {
  const links = [
    {to: "/home", title: <HomeIcon middle/>},
    {to: "/explore", title: <ExploreIcon middle/>},
    {to: "/notifications", title: <NotifyIcon middle/>},
    {to: "/messages", title: <MessageIcon middle/>},
  ]
  return <LinkList links={links}/>;
}

export function LinkList(props) {
  return (
    <Wrapper>
      {
        props.links.map((link, i) => 
          <StyledNavLink key={i} to={link.to} {...link}>
            { typeof link.title === 'string'
              ? <Text secondary>{link.title}</Text>
              : link.title
            }
          </StyledNavLink>
        )
      }
    </Wrapper>
  )
}