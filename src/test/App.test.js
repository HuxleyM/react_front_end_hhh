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

      it('should render ShowVenues div if venues array contains data', async ()=> {
        var dummy = mountWrapper
        dummy.setState( {venues:['dummy data']} )
        await dummy.instance().componentDidMount();
       
        console.log(dummy.state)
    
      })
    })
  })
