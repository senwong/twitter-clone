import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";
import CustomHr from "../BaseComponents/CustomHr";
import { Person, List, BookMark, Momments } from "../BaseComponents/SVGIcons";
import Text from "../BaseComponents/Text";
import { useMediaQuery } from "../utilitys";
import { hide as hideProfilePage } from "../actionCreators/profilePage";
import { whiteBackground } from "../themes";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import Followers from "./Followers";
import ListItem from "./ListItem";
import SettingsItem from "./SettingsItem";
import DataSaverButton from "./DataSaverButton";
import DarkModeButton from "./DarkModeButton";

const SidePage = styled(animated.div)`
  background-color: rgba(0, 0, 0, 0.07);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.iswide ? "flex-end" : "flex-start")};
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

function ProfilePage({ show, hideSelf }) {
  const isWide = useMediaQuery("(min-width: 1000px)");
  const pageTransitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const menuTransitions = useTransition(show, null, {
    from: { transform: `translate3d(${isWide ? 280 : -280}px, 0, 0)` },
    enter: { transform: "translate3d(0, 0, 0)" },
    leave: { transform: `translate3d(${isWide ? 280 : -280}px, 0, 0)` }
  });

  let menu = null;

  function handleClick(e) {
    if (menu && e.target !== menu && !menu.contains(e.target)) {
      hideSelf();
    }
  }
  return pageTransitions.map(
    ({ item, key, props: pageProps }) =>
      item && (
        <SidePage
          key={key}
          style={pageProps}
          onClick={handleClick}
          iswide={isWide ? 1 : 0}
        >
          {menuTransitions.map(
            ({ item: menuItem, key: menuKey, props: menuProps }) =>
              menuItem && (
                <SideMenu
                  key={menuKey}
                  style={menuProps}
                  ref={el => {
                    menu = el;
                  }}
                >
                  <UserAvatar />
                  <UserName />
                  <Followers />
                  <ListItem
                    left={<Person xsmall secondary />}
                    middle={<Text>个人资料</Text>}
                  />
                  <ListItem
                    left={<List xsmall secondary />}
                    middle={<Text>列表</Text>}
                  />
                  <ListItem
                    left={<BookMark xsmall secondary />}
                    middle={<Text>书签</Text>}
                  />
                  <ListItem
                    left={<Momments xsmall secondary />}
                    middle={<Text>瞬间</Text>}
                  />
                  <CustomHr />
                  <SettingsItem />
                  <ListItem middle={<Text>帮助中心</Text>} />
                  <ListItem middle={<Text>登出</Text>} />
                  <CustomHr />
                  <ListItem
                    middle={(
<div style={{ marginRight: "55px" }}>
  <Text>流量节省程序</Text>
</div>
)}
                    right={(
<div style={{ margin: "0 9px" }}>
  <DataSaverButton />
</div>
)}
                  />
                  <ListItem
                    middle={(
<div style={{ marginRight: "55px" }}>
  <Text>夜间模式</Text>
</div>
)}
                    right={(
<div style={{ margin: "0 9px" }}>
  <DarkModeButton />
</div>
)}
                  />
                </SideMenu>
              )
          )}
        </SidePage>
      )
  );
}
ProfilePage.propTypes = {
  hideSelf: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  show: state.profilePage.show
});
const mapDispatchToProps = dispatch => ({
  hideSelf: () => dispatch(hideProfilePage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
