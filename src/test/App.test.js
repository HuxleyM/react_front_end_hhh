import App from '../App'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'


describe('App js shouls say hello world', ()=>{

    const renderWrapper = render(< App/>)

    it('should say hello', ()=>{
        expect(renderWrapper.find('div h1').text()).toBe('Hello, React!')
    })

    const wrapper = shallow(< App/>)

    it('should say hello', ()=>{
        expect(
            wrapper.containsMatchingElement(
                <h1>Hello, React!</h1>
            )
        ).toBeTruthy()
    })
})
