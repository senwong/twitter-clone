import { show, hide } from "./tweetCardPopup";
import { tweetCardPopup } from "../actionTypes";

describe("tweetCardPopup action creator", () => {
  it("should create an action to show tweetCardPopup", () => {
    const expectedAction = {
      type: tweetCardPopup.show
    };
    expect(show()).toEqual(expectedAction);
  });
  it("should create an action to hide tweetCardPopup", () => {
    const expectedAction = {
      type: tweetCardPopup.hide
    };
    expect(hide()).toEqual(expectedAction);
  });
});
