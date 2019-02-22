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

      it('should render ShowVenues div if venues array contains data', () => {
        var dummy = mountWrapper
        dummy.setState( {venues:[{ name:'dummy name', address:'dummy address' }]} )
        expect(dummy.find('li').first().text()).toBe(' dummy name dummy address')
      })

      it('should render an individual venue details when you click on it', () => {
        var dummy = mountWrapper
        const venue = wrapper.find('button.view').first()
        dummy.setState( {venues:[{ name:'second name', address:'second address' }]} )
        venue.simulate('click')

      })
  })
