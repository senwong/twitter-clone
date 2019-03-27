import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { BackIcon } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';
import { whiteBackgroud } from '../themes';

const Filling = styled.div`
  height: 49px;
`;
const Container = styled.div`
  padding: 0 9px;
  height: 49px;
  display: flex;
  align-Items: stretch;
  border-bottom: 1px solid rgb(101, 119, 134);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${whiteBackgroud}
`;

const BtnWrapper = styled.div`
  min-width: 37px;
  min-height: 37px;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  transition-property: background-color;
  transition-duration: 0.2s;
  border-radius: 9999px;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
`;
function BackHead({ history, title, subTitle }) {
  return (
    <React.Fragment>
      <Filling />
      <Container>
        <ContentWrapper>
          <BtnWrapper aria-label="button" role="button" onClick={() => history.goBack()}>
            <BackIcon small primary />
          </BtnWrapper>
          <div>
            <Text large bold>{title}</Text>
            {subTitle
              && (
              <div>
                <Text small secondary color="secondary" size="small">{subTitle}</Text>
              </div>
              )
            }
          </div>
        </ContentWrapper>
      </Container>
    </React.Fragment>
  );
}
BackHead.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
BackHead.defaultProps = {
  title: '',
  subTitle: '',
};

export default withRouter(BackHead);
