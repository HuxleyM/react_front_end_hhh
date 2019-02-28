import VenueProfile from '../../../components/venueProfile.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme';

describe('Venue Profile', () => {
  let wrapper;
  let mockVenue;

  beforeEach(() => {
    let mockVenue = { name:'Crisis Cafe', address:'Commercial Street' }
    wrapper = mount(< VenueProfile
                    venue={mockVenue}
                    />)
    })

  it('returns venue name in the component', () => {
    console.log(wrapper.state.venue)
    expect(wrapper.contains('Crisis Cafe')).toBe(true)
  })
})
