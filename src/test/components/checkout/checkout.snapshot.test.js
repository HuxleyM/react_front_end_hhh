import React, { Component } from 'React';
import { create } from "react-test-renderer";
import Checkout from '../../../components/checkout.js'


describe("Checkout Form", () => {
  test("it matches the snapshot", () => {
    const component = create(<Checkout />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
