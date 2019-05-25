import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "../BaseComponents/Text";

const Container = styled.div`
  padding: 14px 9px;
`;
function SubTitle({ children }) {
  return (
    <Container>
      <Text large secondary>
        {children}
      </Text>
    </Container>
  );
}
SubTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default SubTitle;
