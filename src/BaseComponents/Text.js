import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styled-theming';

const defaultColor = theme('mode', {
  light: 'rgb(20, 23, 26)',
  dark: 'rgb(255, 255, 255)',
});
// const primaryColor = theme('mode', {
//   light: 'rgb(27, 149, 224)',
//   dark: 'rgb(27, 149, 224)',
// });
const secondaryColor = theme('mode', {
  light: 'rgb(101, 119, 134)',
  dark: 'rgb(136, 153, 166)',
});
// const warningColor = theme('mode', {
//   ligit: 'rgb(224, 36, 94);',
//   dark: 'rgb(224, 36, 94)',
// })
const StyledText = styled.span`
  line-height: 1.3125;
  font-weight: ${props => (props.bold ? '700' : '400')};
  color: ${(props) => {
    if (props.secondary) {
      return secondaryColor;
    }
    if (props.primary) {
      return 'rgb(27, 149, 224)';
    }
    if (props.warning) {
      return 'rgb(224, 36, 94)';
    }
    return defaultColor;
  }};
  font-size: ${(props) => {
    if (props.small) return '12px';
    if (props.large) return '18px';
    if (props.xlarge) return '21px';
    return '14px';
  }};
`;
export default function Text({
  children, bold, secondary, primary, warning, small, large, xlarge,
}) {
  return (
    <StyledText
      bold={bold}
      secondary={secondary}
      primary={primary}
      warning={warning}
      small={small}
      large={large}
      xlarge={xlarge}
    >
      {children}
    </StyledText>
  );
}
Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  bold: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
};
Text.defaultProps = {
  children: '',
  bold: false,
  secondary: false,
  primary: false,
  warning: false,
  small: false,
  large: false,
  xlarge: false,
};
/*

  color: ${props =>
    props.secondary ? 'rgb(101, 119, 134)'
    : props.primary ? 'rgb(27, 149, 224)'
    : props.warning ? 'rgb(224, 36, 94)'
    : 'rgb(20, 23, 26)'
  };
*/
