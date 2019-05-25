import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Avatar from "./Avatar";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    onClick: jest.fn(),
    src: "some-src",
    xsmall: false,
    small: false,
    large: false
  };

  const enzymeWrapper = shallow(<Avatar {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Avatar", () => {
    it("should render self and subcomponents", () => {
      const { props, enzymeWrapper } = setup();
      expect(enzymeWrapper.prop("alt")).toEqual("user avatar");
      expect(enzymeWrapper.prop("src")).toEqual(props.src);
    });

    it("should call onClick", () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.simulate("click");
      expect(props.onClick.mock.calls.length).toBe(1);
    });

    it("should have width and height 24px", () => {
      const enzymeWrapper = render(<Avatar src=" " xsmall />);
      console.log(enzymeWrapper.get(0));
    });
  });
});
