import reducer from "./modal";
import { modal } from "../actionTypes";

describe("modal reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      show: false,
      title: "",
      type: "primary",
      onConfirm: null,
      onCancel: null
    });
  });
  it("showld set show true", () => {
    expect(
      reducer(undefined, {
        type: modal.show
      })
    ).toEqual({
      show: true,
      title: "",
      type: "primary",
      onConfirm: null,
      onCancel: null
    });
  });
  it("showld set show false", () => {
    expect(
      reducer(undefined, {
        type: modal.hide
      })
    ).toEqual({
      show: false,
      title: "",
      type: "primary",
      onConfirm: null,
      onCancel: null
    });
  });
  it("showld setup modal config", () => {
    function onConfirm() {}
    function onCancel() {}
    expect(
      reducer(undefined, {
        type: modal.setup,
        config: {
          title: "new title",
          type: "warning",
          onConfirm,
          onCancel
        }
      })
    ).toEqual({
      show: false,
      title: "new title",
      type: "warning",
      onConfirm,
      onCancel
    });
  });
});
