import {
  shape,
  oneOfType,
  number,
  string,
  bool,
  node,
  arrayOf
} from "prop-types";

export const userType = shape({
  id: number.isRequired,
  avatarSrc: string.isRequired,
  name: string.isRequired,
  nickName: string.isRequired,
  isV: bool.isRequired,
  desc: string.isRequired,
  followers: number.isRequired,
  following: number.isRequired,
  phone: number.isRequired,
  email: string.isRequired,
  location: string.isRequired,
  birthday: string.isRequired,
  registerTime: string.isRequired
});
export const tweetType = shape({
  id: number.isRequired,
  userId: number.isRequired,
  content: string.isRequired,
  createdTime: string.isRequired,
  replayAmount: number.isRequired,
  forewardAmount: number.isRequired,
  likeAmount: number.isRequired
});
export const linkListType = arrayOf(
  shape({
    to: string.isRequired,
    title: oneOfType([string, node]).isRequired,
    exact: bool
  })
);

export const positionType = shape({
  left: number,
  right: number,
  top: number,
  bottom: number
});
export const defaultPosition = {
  left: null,
  right: null,
  top: null,
  bottom: null
};
