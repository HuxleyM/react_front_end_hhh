import App from '../App'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'


describe('App js shouls say hello world', ()=>{

    const renderWrapper = render(< App/>)
    const wrapper = shallow(< App/>)


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

    describe('Show Venues', () => {
      it('renders a list of venues', ()=> {
        expect(renderWrapper.find('ul').text()).toContain("crisis cafe")
      })
    })
})
