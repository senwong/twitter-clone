import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Transition } from 'react-transition-group';
import Avatar from '../BaseComponents/Avatar';
import CustomHr from '../BaseComponents/CustomHr';
import {
  Person, List, BookMark, Momments,
} from '../BaseComponents/SVGIcons';
import ToggleButton from '../BaseComponents/ToggleButton';
import Text from '../BaseComponents/Text';

const SidePage = styled.div`
  background-color: rgba(0, 0, 0, 0.07);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 2;
  animation-duration: ${props => props.timeout + 'ms'};
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-name: ${props => {
    if(props.state === 'entering') return 'fadeIn';
    if(props.state === 'exiting') return 'fadeOut';
  }};
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  };
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  };
`;
const SideMenu = styled.div`
  background-color: rgb(255, 255, 255);
  height: 100%;
  min-width: 280px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 6px 6px;
  animation-duration: ${props => props.timeout + 'ms'};
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-name: ${props => {
    if(props.state === 'entering') return 'fadeInLeft';
    if(props.state === 'exiting') return 'fadeOutLeft';
  }};
  @keyframes fadeInLeft {
    from {
      transform: translateX(-280px);
    }
    to {
      transform: translateX(0px);
    }
  };
  @keyframes fadeOutLeft {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-280px);
    }
  };
`;
const WrapperButton = styled.button`
  background-color: white;
  border: none;
  margin: 0;
  padding: 0;
  font-size: inherit;
  :focus {
    outline: none;
  }
`;
const timeout = 250;
function ProfilePage({ user, toggle, history, show, }) {
  const [isDataSaver, setIsDataSaver] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  let menu = null;
  function handleClick(e) {
    if (menu && e.target !== menu && !menu.contains(e.target)) {
      toggle();
    }
  }
  function handleSettingClick() {
    history.push('/settings');
    toggle();
  }
  function handleUserClick() {
    history.push(`/${user.name}`);
    toggle();
  }
  function handleDataSaverClick() {
    setIsDataSaver(!isDataSaver);
  }
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <Transition in={show} timeout={timeout} unmountOnExit appear>
      {
        state => {
          return (
            <SidePage onClick={handleClick} state={state} timeout={timeout}>
              <SideMenu ref={(el) => { menu = el; }} state={state} timeout={timeout}>
                <WrapperButton
                  type="button"
                  style={{ padding: '9px 18px 0' }}
                  onClick={handleUserClick}
                >
                  <Avatar user={user} />
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
                    </Text>
                    正在关注
                  </div>
                  <div style={{ display: 'inline-block' }}>
                    <Text bold>
                      {user.followers}
                      {' '}
                    </Text>
                    关注者
                  </div>
                </div>
                <ListItem left={<Person xsmall secondary />} middle={<div>个人资料</div>} />
                <ListItem left={<List xsmall secondary />} middle={<div>列表</div>} />
                <ListItem left={<BookMark xsmall secondary />} middle={<div>书签</div>} />
                <ListItem left={<Momments xsmall secondary />} middle={<div>瞬间</div>} />
                <CustomHr />
                <WrapperButton type="button" onClick={handleSettingClick}>
                  <ListItem middle={<div>设置和隐私</div>} />
                </WrapperButton>
                <ListItem middle={<div>帮助中心</div>} />
                <ListItem middle={<div>登出</div>} />
                <CustomHr />
                <ListItem
                  middle={
                    <div style={{ marginRight: '55px' }}>流量节省程序</div>
                  }
                  right={(
                    <div style={{ margin: '0 9px' }}>
                      <ToggleButton checked={isDataSaver} onClick={handleDataSaverClick} />
                    </div>
                  )}
                />
                <ListItem
                  middle={
                    <div style={{ marginRight: '55px' }}>夜间模式</div>
                  }
                  right={(
                    <div style={{ margin: '0 9px' }}>
                      <ToggleButton checked={isDarkMode} onClick={handleDarkModeClick} />
                    </div>
                  )}
                />
              </SideMenu>
            </SidePage>
          );
        }
      }

    </Transition>
  );
}
ProfilePage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    nickName: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
  }).isRequired,
  toggle: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 18px;
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
export default withRouter(ProfilePage);
