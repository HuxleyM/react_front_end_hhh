import App from '../App'
import React, {Component} from 'react';
import {shallow, mount} from 'enzyme'


describe('App js shouls say hello world', ()=>{

    const wrapper = mount(< App/>)

    it('should say hello', ()=>{
        expect(
            wrapper.containsMatchingElement(
                <h1>Hello, React!</h1>
            )
        ).toBeTruthy()
    })
})