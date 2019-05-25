import React from "react";
import { string } from "prop-types";
import { connect } from "react-redux";
import BackHead from "./BackHead";

function BackHeadWithUsername({ title, subTitle }) {
  return <BackHead title={title} subTitle={subTitle} />;
}
BackHeadWithUsername.propTypes = {
  title: string,
  subTitle: string
};
BackHeadWithUsername.defaultProps = {
  title: "",
  subTitle: ""
};
const mapStateToProps = state => ({
  subTitle: state.currentUser && state.currentUser.name
});
export default connect(mapStateToProps)(BackHeadWithUsername);
