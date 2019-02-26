import SignUp from '../../../components/signup.js'
import SignUpForm from '../../../components/signupForm.js'
import React, {Component} from 'react';
import { create } from "react-test-renderer";
import {shallow, mount, render} from 'enzyme'

describe("Sign up", () => {
  test('it Matches the snapshot', () => {
    const component = create(<SignUp/>);
    expect(component.toJSON()).toMatchSnapshot();
  })
})

describe("Sign up", () => {

  let wrapper
  let userinfo

  beforeEach(() => {
      userinfo = {
      name: 'Crisis Cafe',
      address: 'Commercial Street',
      email: 'c@cc.com',
      password: 'password123'
    }
    wrapper = mount(<SignUp/>,
    { attachTo: document.body })
  })

  it('renders a form (sanity check)', () =>{
    expect(wrapper.contains('Venue Name')).toBe(true)
  })

  it('Calls handleForm on submit click', () => {

    wrapper.instance().sendVenue = jest.fn()

    const venueNameInput = wrapper.find('input.venuename')
    venueNameInput.value = userinfo.name

    const venueAddressInput = wrapper.find('input.venueaddress')
    venueAddressInput.value = userinfo.address

    const venueEmailInput = wrapper.find('input.venueEmail')
    venueEmailInput.value = userinfo.email

    const venuePasswordInput = wrapper.find('input.password')
    venuePasswordInput.value = userinfo.password

    wrapper.find('input.submitForm').simulate('submit');

    expect(wrapper.instance().sendVenue).toHaveBeenCalled()

  })




})


// describe('<LogIn />', () => {
//     const testValues = {
//         username: 'FOO',
//         password: 'BAZ',
//         handleSubmit: jest.fn(),
//     };

//     it('Submit works', () => {

//         const component = shallow(
//             <LogIn {...testValues} />
//         );
//         component.find('#submitButton').simulate('click');
//         expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
//         expect(testValues.handleSubmit).toBeCalledWith({username: testValues.username, password: testValues.password});
//     });
// });
