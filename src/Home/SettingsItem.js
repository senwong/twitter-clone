import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { func } from 'prop-types';
import { history as historyType } from 'react-router-prop-types';
import Text from '../BaseComponents/Text';
import { hide } from '../actionCreators/profilePage';
import { whiteBackground } from '../themes';
import ListItem from './ListItem';

const WrapperButton = styled.button`
  ${whiteBackground}
  border: none;
  margin: 0;
  padding: 0;
  font-size: inherit;
  :focus {
    outline: none;
  }
`;

function SettingsItem({ history, hideProfilePage }) {
  function handleSettingClick() {
    history.push('/settings');
    hideProfilePage();
  }
  return (
    <WrapperButton type="button" onClick={handleSettingClick}>
      <ListItem middle={<Text>设置和隐私</Text>} />
    </WrapperButton>
  );
}
SettingsItem.propTypes = {
  history: historyType.isRequired,
  hideProfilePage: func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  hideProfilePage: () => dispatch(hide()),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(SettingsItem));
