import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useSpring, animated } from 'react-spring';
import Avatar from '../BaseComponents/Avatar';
import CustomHr from '../BaseComponents/CustomHr';
import {
  Person, List, BookMark, Momments,
} from '../BaseComponents/SVGIcons';
import ToggleButton from '../BaseComponents/ToggleButton';
import Text from '../BaseComponents/Text';
import { useMediaQuery } from '../utilitys';
import { hide as hideProfilePage } from '../actionCreators/profilePage';
import { setLight, setDark } from '../actionCreators/theme';
import { whiteBackground } from '../themes';
import { userType } from '../propTypes';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const ListItemLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9px;
`;
const ListItemMiddle = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;
const ListItemRight = styled.div`
  display: flex;
  align-items: center;
`;
function ListItem({ left, middle, right }) {
  return (
    <ListItemContainer>
      {
        left && <ListItemLeft>{left}</ListItemLeft>
      }
      {
        middle && <ListItemMiddle>{middle}</ListItemMiddle>
      }
      {
        right && <ListItemRight>{right}</ListItemRight>
      }
    </ListItemContainer>
  );
}
ListItem.propTypes = {
  left: PropTypes.element,
  middle: PropTypes.element,
  right: PropTypes.element,
};
ListItem.defaultProps = {
  left: <div />,
  middle: <div />,
  right: <div />,
};

const SidePage = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.07);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.iswide ? 'flex-end' : 'flex-start')};
  z-index: 2;
`;
const SideMenu = styled(animated.div)`
  ${whiteBackground};
  height: 100%;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
`;
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

function ProfilePage({
  user, hideSelf, history, themeMode, setLightTheme, setDarkTheme,
}) {
  const isWide = useMediaQuery('(min-width: 1000px)');
  const [isDataSaver, setIsDataSaver] = useState(false);
  let menu = null;

  const [pageProps, setPage] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  const [menuProps, setMenu] = useSpring(() => ({
    from: { transform: `translate3d(${isWide ? 280 : -280}px, 0, 0)` },
    to: { transform: 'translate3d(0, 0, 0)' },
  }));
  function hide() {
    setPage({
      opacity: 0,
      onRest: () => {
        hideSelf();
      },
    });
    setMenu({
      transform: `translate3d(${isWide ? 280 : -280}px, 0, 0)`,
    });
  }
  function handleClick(e) {
    if (menu && e.target !== menu && !menu.contains(e.target)) {
      hide();
    }
  }
  function handleSettingClick() {
    history.push('/settings');
    hide();
  }
  function handleUserClick() {
    history.push(`/${user.name}`);
    hide();
  }
  function handleDataSaverClick() {
    setIsDataSaver(!isDataSaver);
  }
  function handleDarkModeClick() {
    if (themeMode === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
    hide();
  }
  return (
    <SidePage style={pageProps} onClick={handleClick} iswide={isWide ? 1 : 0}>
      <SideMenu style={menuProps} ref={(el) => { menu = el; }}>
        <WrapperButton
          type="button"
          style={{ padding: '9px 18px 0' }}
          onClick={handleUserClick}
        >
          {
            user
            && user.avatarSrc
            && <Avatar user={user} />
          }
        </WrapperButton>
        <WrapperButton
          type="button"
          style={{ padding: '9px 18px 0' }}
          onClick={handleUserClick}
        >
          <Text bold>{user.nickName}</Text>
          <br />
          <Text secondary>
            @
            {user.name}
          </Text>
        </WrapperButton>
        <div style={{ padding: '9px 18px' }}>
          <div style={{ display: 'inline-block', marginRight: '9px' }}>
            <Text bold>
              {user.following}
              {' '}
              正在关注
            </Text>
          </div>
          <div style={{ display: 'inline-block' }}>
            <Text bold>
              {user.followers}
              {' '}
              关注者
            </Text>
          </div>
        </div>
        <ListItem left={<Person xsmall secondary />} middle={<Text>个人资料</Text>} />
        <ListItem left={<List xsmall secondary />} middle={<Text>列表</Text>} />
        <ListItem left={<BookMark xsmall secondary />} middle={<Text>书签</Text>} />
        <ListItem left={<Momments xsmall secondary />} middle={<Text>瞬间</Text>} />
        <CustomHr />
        <WrapperButton type="button" onClick={handleSettingClick}>
          <ListItem middle={<Text>设置和隐私</Text>} />
        </WrapperButton>
        <ListItem middle={<Text>帮助中心</Text>} />
        <ListItem middle={<Text>登出</Text>} />
        <CustomHr />
        <ListItem
          middle={
            <div style={{ marginRight: '55px' }}><Text>流量节省程序</Text></div>
          }
          right={(
            <div style={{ margin: '0 9px' }}>
              <ToggleButton checked={isDataSaver} onClick={handleDataSaverClick} />
            </div>
          )}
        />
        <ListItem
          middle={
            <div style={{ marginRight: '55px' }}><Text>夜间模式</Text></div>
          }
          right={(
            <div style={{ margin: '0 9px' }}>
              <ToggleButton checked={themeMode === 'dark'} onClick={handleDarkModeClick} />
            </div>
          )}
        />
      </SideMenu>
    </SidePage>
  );
}
ProfilePage.propTypes = {
  user: userType.isRequired,
  hideSelf: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  // show: PropTypes.bool.isRequired,
  themeMode: PropTypes.oneOf(['light', 'dark']).isRequired,
  setLightTheme: PropTypes.func.isRequired,
  setDarkTheme: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser,
  // show: state.profilePage.show,
  themeMode: state.theme.mode,
});
const mapDispatchToProps = dispatch => ({
  hideSelf: () => dispatch(hideProfilePage()),
  setLightTheme: () => dispatch(setLight()),
  setDarkTheme: () => dispatch(setDark()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage));
