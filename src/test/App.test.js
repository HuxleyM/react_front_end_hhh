import App from '../App'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'


describe('App js shouls say Keep Ahead', ()=>{
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

    it('should say hello', ()=>{
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

      xit('should render ShowVenues div if venues array contains data', () => {
        var dummy = mountWrapper
        dummy.setState( {venues:[{ name:'dummy name', address:'dummy address' }]} )
        expect(dummy.find('li').first().text()).toEqual('dummy name dummy address')
      })
    })

    describe('Sign up', () => {
      it('renders a signup button', () => {
      expect(renderWrapper.find('button').text()).toBe('Sign Up')
      })
    })
  })
