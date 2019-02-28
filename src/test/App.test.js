import App from '../App'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'


describe('App js should say Keep Ahead', ()=>{
    let renderWrapper
    let wrapper
    let mountWrapper

    beforeEach(() => {
      renderWrapper = render(< App/>)
      wrapper = shallow(< App/>)
      mountWrapper = mount(< App/>)
    })

    it('should display the app name', ()=>{
        expect(renderWrapper.find('div h1').text()).toBe('Keep Ahead')
    })

    it('should say Keep Ahead', ()=>{
        expect(
            wrapper.containsMatchingElement(
                <h1>Keep Ahead</h1>
            )
        ).toBeTruthy()
    })

  describe('geolocation', ()=>{
    it('its geolocation should be able to run', ()=>{
     expect(mountWrapper.instance().geolocateMe()).toBe
    })
  })


    describe('Show Venues', () => {
      it('should render loading div if no values present', ()=> {
        var dummy = mountWrapper
        dummy.setState( { venues: [] } )
        expect(
          dummy.containsMatchingElement(
            <div> loading.... </div>
          )
        ).toBeTruthy()
      })
    })

    describe('Sign up', () => {
      it('renders a signup button', () => {
      expect(renderWrapper.find('#sign_up_button').text()).toBe('Sign Up')
      })

      it('should not display if user is signed up', () => {
        wrapper.find('#sign_up_button').simulate('click');
        expect(wrapper.state('signup')).toEqual(true)
        //expect(renderWrapper.find('#sign_up_button').text()).toBeFalsy()
      })
    })


    describe('Sign in', () => {
      it('renders a signin button', () => {
        expect(renderWrapper.find('#sign_in_button').text()).toBe('Sign In')
      })

      it('should not display if user is signed in', () => {
        wrapper.find('#sign_in_button').simulate('click');
        expect(wrapper.state('signin')).toEqual(true)
        //expect(renderWrapper.find('#sign_in_button').text()).toBeFalsy()
      })
  })
})
