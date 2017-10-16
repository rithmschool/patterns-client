import React from "react";
import { shallow } from "enzyme";
import Company from "./Company";
import down from "../../images/icon-chevron-right-gray.svg";

describe("<Company />", () => {
  const wrapper = shallow(<Company />);

  it("should render parent div called company", () => {
    expect(wrapper.find(".company")).toHaveLength(1);
  });

  it("should render div called company-logo", () => {
    expect(wrapper.find(".company-logo")).toHaveLength(1);
  });

  it("should render div called company-name", () => {
    expect(wrapper.find(".company-name")).toHaveLength(1);
  });

  it("should render div called company-data", () => {
    expect(wrapper.find(".company-data")).toHaveLength(1);
  });

  it("should render div called first-data-collection", () => {
    expect(wrapper.find(".first-data-collection")).toHaveLength(1);
  });

  it("should render div called second-data-collection", () => {
    expect(wrapper.find(".second-data-collection")).toHaveLength(1);
  });

  it("should render div called third-data-collection", () => {
    expect(wrapper.find(".third-data-collection")).toHaveLength(1);
  });

  it("should render div called fourth-data-collection", () => {
    expect(wrapper.find(".fourth-data-collection")).toHaveLength(1);
  });

  it("should render div called company-arrow", () => {
    expect(wrapper.find(".company-arrow")).toHaveLength(1);
  });
});
