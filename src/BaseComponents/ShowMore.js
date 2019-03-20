import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ShowMoreWrapper = styled(Link)`
  padding: 14px 9px;
  color: rgb(27, 149, 224);
  display: block;
`;
function ShowMore({ href }) {
  return <ShowMoreWrapper to={href}>显示更多</ShowMoreWrapper>;
}
ShowMore.propTypes = {
  href: PropTypes.string,
};
ShowMore.defaultProps = {
  href: '#',
};
export default ShowMore;
