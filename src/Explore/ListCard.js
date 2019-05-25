import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import theme from "styled-theming";

const listCardContainerStyles = theme("mode", {
  light: css`
    border-bottom-color: rgb(230, 236, 240);
    &:hover {
      background-color: rgba(230, 236, 240, 0.7);
    }
  `,
  dark: css`
    border-bottom-color: rgb(56, 68, 77);
    &:hover {
      background-color: rgb(24, 36, 48);
    }
  `
});
const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 9px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  ${listCardContainerStyles}
`;
const ListCardLeft = styled.div`
  flex: 1 1 0;
  margin-right: 9px;
`;
const ListCardHead = styled.div`
  font-size: 12px;
  line-height: 18.375px;
  color: rgb(101, 119, 134);
`;
const ListCardBody = styled.div`
  font-weight: bold;
  color: rgb(20, 23, 26);
  line-height: 1.3125;
  margin: 2px 0;
`;
const ListCardRight = styled.div`
  flex: 0 0 auto;
  width: 15%;
  min-width: 70px;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  position: relative;
`;
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function ListCard({ head, body, foot, right }) {
  return (
    <ListCardContainer>
      <ListCardLeft>
        <ListCardHead>{head}</ListCardHead>
        <ListCardBody>{body}</ListCardBody>
        <ListCardHead>{foot}</ListCardHead>
      </ListCardLeft>
      {right && (
        <ListCardRight>
          <div style={{ width: "100%", paddingBottom: "100%" }} />
          <ImgWrapper>
            <img src={right} alt="" width="100%" />
          </ImgWrapper>
        </ListCardRight>
      )}
    </ListCardContainer>
  );
}
ListCard.propTypes = {
  head: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  foot: PropTypes.node.isRequired,
  right: PropTypes.node
};
ListCard.defaultProps = {
  right: null
};
export default ListCard;
