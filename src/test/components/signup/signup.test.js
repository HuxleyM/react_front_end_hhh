import SignUp from '../../../components/signup.js'
import React, {Component} from 'react';
import { create } from "react-test-renderer";
import {shallow, mount, render} from 'enzyme'

describe("Sign up", () => {
  test('it Matches the snapshot', () => {
    const component = create(<SignUp/>);
    expect(component.toJSON()).toMatchSnapshot();
  })
})

describe('Sign up', () => {

  const wrapper = mount(
    <SignUp/>
  )

  it('displays a form to signup with', () => {
    expect(wrapper.find(<form></form>)).toBeTruthy();
  });

  it('the form can take a venuename', () => {
    expect(wrapper.contains('Venue Name')).toBe(true)
  })

  it('the form can take an address', () => {
    expect(wrapper.contains('Venue Address')).toBe(true)
  })

  it('the form can take an email', () => {
    expect(wrapper.contains('Email')).toBe(true)
  })

  it('the form can take an password', () => {
    expect(wrapper.contains('Password')).toBe(true)
  })

})
