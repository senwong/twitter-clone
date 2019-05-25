import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Text from "../BaseComponents/Text";
import { grayBorderBottom } from "../themes";

const Container = styled.div`
  padding: 9px;
  ${grayBorderBottom}
`;

export default function TitleBar({ title, subtitle, rear, primary }) {
  return (
    <Container isRear={rear}>
      <Text large bold primary={primary}>
        {title}
      </Text>
      {subtitle && (
        <Text small secondary>
          {subtitle}
        </Text>
      )}
    </Container>
  );
}
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  rear: PropTypes.bool,
  primary: PropTypes.bool
};
TitleBar.defaultProps = {
  subtitle: "",
  rear: false,
  primary: false
};
