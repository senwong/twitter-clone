import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../BaseComponents/Text";
import RadioInput from "./RadioInput";
import { whiteBackground } from "../themes";

const Container = styled.div`
  padding: 14px 9px;
  ${whiteBackground}
`;
const TitleWrapper = styled.div`
  padding: 9px 0 5px 0;
`;
function RadioGroup({ title, subTitle, radios }) {
  const [value, setValue] = useState();
  return (
    <Container>
      <TitleWrapper>
        <Text bold>{title}</Text>
      </TitleWrapper>
      <Text small secondary>
        {subTitle}
      </Text>
      {/* radio buttons */}
      {radios.map(r => (
        <RadioInput
          key={r.key}
          title={r.title}
          name={title}
          checked={value === r.title}
          onChange={() => setValue(r.title)}
        />
      ))}
    </Container>
  );
}
const radioType = PropTypes.shape({
  title: PropTypes.string.isRequired
});
const propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  radios: PropTypes.arrayOf(radioType).isRequired
};
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = {
  subTitle: null
};
export const RadioGroupType = PropTypes.shape(propTypes);
export default RadioGroup;
