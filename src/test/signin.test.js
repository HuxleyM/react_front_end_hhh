import SignIn from '../components/signIn.js'
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

  describe('it recieves ad sets state to venue object', ()=>{
    
    // it('calls `func` when mounted', () => {
    //   const wrapper = shallow(<Test />);
    //   const instance = wrapper.instance();
    //   jest.spyOn(instance, 'func');
    //   instance.componentDidMount();
    //   expect(instance.func).toHaveBeenCalled();
    // });
    it('end venue calls set venue', ()=>{
      const wrapper = shallow(<SignIn />);
      const instance = wrapper.instance();
      const spy = jest.spyOn(instance, 'setVenue');
      var result = instance.sendVenue('dummy@gmail.com', 'dummy_password')
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    })
 /*
 https://remarkablemark.org/blog/2018/06/13/spyon-react-class-method/*/
 
    it('calls handle form on submit', ()=>{
      const wrapper = mount(<SignIn />);
      const instance = wrapper.instance();
      const spy = jest.spyOn(wrapper, 'handleform');
      wrapper.find('#submit_form').simulate('click')
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    })


  })
})
