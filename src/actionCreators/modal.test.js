import { hide, show, setup } from "./modal";
import { modal } from "../actionTypes";

describe("modal action creator", () => {
  it("should create an action to hide modal", () => {
    const expectedAction = {
      type: modal.hide
    };
    expect(hide()).toEqual(expectedAction);
  });
  it("should create an action to show modal", () => {
    const expectedAction = {
      type: modal.show
    };
    expect(show()).toEqual(expectedAction);
  });
  it("should create an action to setup modal", () => {
    const config = {
      type: "primary",
      title: "title",
      onConfirm: () => {},
      onCancel: () => {}
    };
    const expectedAction = {
      type: modal.setup,
      config
    };
    expect(setup(config)).toEqual(expectedAction);
  });
});
