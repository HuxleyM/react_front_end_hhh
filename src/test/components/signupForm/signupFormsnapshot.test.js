import React, { Component } from 'React';
import { create } from "react-test-renderer";
import SignupForm from '../../../components/signupForm'


describe("SignupForm", () => {
  test("it matches the snapshot", () => {
    const component = create(<SignupForm />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
