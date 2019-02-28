import SignIn from '../../../components/venueSignin.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'

describe('Sign up', () => {

  const wrapper = mount(
    <SignIn/>
  )

  it('displays a form to signup with', () => {
    expect(wrapper.find(<form></form>)).toBeTruthy();
  });

  it('the form asks for email', () => {
    expect(wrapper.contains('Email')).toBe(true)
  })

  it('the form asks for password', () => {
    expect(wrapper.contains('Password')).toBe(true)
  })
})
// test handleform method calls sendVenue  
