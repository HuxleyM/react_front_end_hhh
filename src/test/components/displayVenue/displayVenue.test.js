import DisplayVenue from '../../../components/displayVenue.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'

describe('Display venues', () => {
  let wrapper
  let mockvenue

  beforeEach(() => {
      let mockvenue = {venue:[{ name:'Crisis Cafe', address:'Commercial Street' }]}
      wrapper = render(< DisplayVenue
      venue={mockvenue}
       />)
    })

  it('should render ShowVenues div if venues array contains data', () => {
    expect(wrapper.venue).toEqual(mockvenue)
  })

})


  
