import App from '../../App'
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

    describe('Sign up', () => {
      it('renders a venuePortal button', () => {
      expect(renderWrapper.find('#venue_portal_button').text()).toBe('Venue Portal')
      })

      it('should not display if user is signed up', () => {
        wrapper.find('#venue_portal_button').simulate('click');
        expect(wrapper.state('venuePortal')).toEqual(true)
      })
    })


    describe('Sign in', () => {
      it('renders a venues portal button', () => {
        expect(renderWrapper.find('#venue_portal_button').text()).toBe('Venue Portal')
      })

      it('should not display if user is signed in', () => {
        wrapper.find('#venue_portal_button').simulate('click');
        expect(wrapper.state('venuePortal')).toEqual(true)
      })
  })
})
