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
      expect(renderWrapper.find('button').text()).toBe('Sign Up')
      })
  })
})
