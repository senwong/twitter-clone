import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactRouterPropTypes from "react-router-prop-types";
import { ArrowRight } from "../BaseComponents/SVGIcons";
import Text from "../BaseComponents/Text";
import {
  whiteBackground,
  grayHover,
  grayBorderBottom,
  lighterBlueBackground
} from "../themes";

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 9px;
  font-size: 14px;
  color: rgb(20, 23, 26);
  line-height: 1.3125;
  text-decoration: none;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.2s;
  ${whiteBackground};
  ${grayHover};
  ${grayBorderBottom}
`;
const StyledNavLink = styled(NavLink)`
  &.active {
    border-right: 2px solid rgb(29, 161, 242);
    ${lighterBlueBackground}
  }
`;
function LinkItem({ to, title, subTitle, isNav }) {
  return (
    <Item as={isNav ? StyledNavLink : null} to={to}>
      <div>
        <Text>{title}</Text>
        <br />
        {subTitle && (
          <Text small secondary>
            {subTitle}
          </Text>
        )}
      </div>
      <ArrowRight xsmall secondary />
    </Item>
  );
}
LinkItem.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, ReactRouterPropTypes.route])
    .isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  isNav: PropTypes.bool
};
LinkItem.defaultProps = {
  subTitle: "",
  isNav: false
};
export default LinkItem;
