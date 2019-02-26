import ShowVenues from '../../../components/showvenues.js'
import React, {Component} from 'react';
import { create } from "react-test-renderer";
import {shallow, mount, render} from 'enzyme'

describe("Show Venues", () => {
  let mockVenues = {venue:[{ name:'Crisis Cafe', address:'Commercial Street' }]}
  let wrapper = mount(<ShowVenues
    venues={mockVenues}
    />)
  
  it('should render ShowVenues div if venues array contains data', () => {
    expect(wrapper).toBeTruthy()
  })
  
console.log("Hello")
  it('onClick should setState of showVenues.state.venue', () => {
  
  const component = wrapper.instance()
  const venueButton = component.find('view').first()
  venueButton.simulate('click')
  expect(component.state.venue).toBe('Crisis Cafe')
  })

})