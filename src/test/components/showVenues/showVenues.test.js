import ShowVenues from '../../../components/showvenues.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'

describe("Show Venues", () => {
  let wrapper
  beforeEach(() => {
    console.log('hi')
    wrapper = mount(<ShowVenues
      venueList={[{name: 'test',
      address: '13 test street',
      email: 'test@test.com',
      password: 'testing'}]}
      />)
  })

  it('renders the venues given to it', () => {
    expect(wrapper.contains('13 test street')).toBe(true)
  })

  it('has a button for each venue', () => {
    expect(wrapper.contains('view')).toBe(true)
  })

  it('has not got a venue state on render', () => {
    expect(wrapper.state.venue).toBeUndefined()
  })

  it('onClick should setState of showVenues.state.venue', () => {
    let rapper = wrapper.instance()
    rapper._updateVenue()
  //  rapper.update()
    expect(rapper.state.venue).toBeTruthy()

  })

})
