import React, { Component } from 'React';
import { create } from "react-test-renderer";
import SignInForm from '../../../components/signinForm'
import {shallow, mount, render} from 'enzyme'

describe("SignupForm", () => {
  test("it matches the snapshot", () => {
    const component = create(<SignInForm />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Sign up', () => {

  const wrapper = mount(
    <SignInForm/>
  )

  it('displays a form to signup with', () => {
    expect(wrapper.find(<form></form>)).toBeTruthy();
  });

  it('the form can take an email', () => {
    expect(wrapper.contains('Email')).toBe(true)
  })

  it('the form can take an password', () => {
    expect(wrapper.contains('Password')).toBe(true)
  })

})
