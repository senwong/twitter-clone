import React from 'react';
import { oneOf, func } from 'prop-types';
import { connect } from 'react-redux';
import ToggleButton from '../BaseComponents/ToggleButton';
import { hide } from '../actionCreators/profilePage';
import { setLight, setDark } from '../actionCreators/theme';

function DarkModeButton({
  themeMode, setLightTheme, setDarkTheme, hideProfilePage,
}) {
  function handleDarkModeClick() {
    if (themeMode === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
    hideProfilePage();
  }
  return <ToggleButton checked={themeMode === 'dark'} onClick={handleDarkModeClick} />;
}
DarkModeButton.propTypes = {
  themeMode: oneOf(['light', 'dark']).isRequired,
  setLightTheme: func.isRequired,
  setDarkTheme: func.isRequired,
  hideProfilePage: func.isRequired,
};

const mapStateToProps = state => ({
  themeMode: state.theme.mode,
});
const mapDispatchToProps = dispatch => ({
  setLightTheme: () => dispatch(setLight()),
  setDarkTheme: () => dispatch(setDark()),
  hideProfilePage: () => dispatch(hide()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DarkModeButton);
