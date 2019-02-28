import SignUp from '../../../components/venueSignup.js'
import React, {Component} from 'react';
import { create } from "react-test-renderer";
import {shallow, mount, render} from 'enzyme'

describe("Sign up Form", () => {
  test('it Matches the snapshot', () => {
    const component = create(<SignUp/>);
    expect(component.toJSON()).toMatchSnapshot();
  })
})
