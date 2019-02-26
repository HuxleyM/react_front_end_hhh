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
    const userinfo = {
      name: 'Crisis Cafe',
      address: 'Commercial Street',
      email: 'c@cc.com',
      password: 'password123'
    }
    wrapper = mount(<SignUp {...userinfo} />)
  })

  it('renders a form (sanity check)', () =>{
    expect(wrapper.contains('Venue Name')).toBe(true)
  })

  it("takes a new user's details through handleForm", () => {
    

    wrapper.find('input.submitForm').simulate("submit", { preventDefault() {} });
    wrapper.update();
    expect(wrapper.sendVenue).toHaveBeenCalled()
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


