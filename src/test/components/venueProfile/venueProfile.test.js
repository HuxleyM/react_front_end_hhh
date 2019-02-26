import VenueProfile from '../../../components/venueProfile.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme';

describe('Venue Profile', () => {
  let wrapper;
  let mockVenue;

  beforeEach(() => {
    let mockvenue = {venue:[{ name:'Crisis Cafe', address:'Commercial Street' }]}
    wrapper = mount(< VenueProfile
                    venue={mockvenue}
                    />)
    })

  it('returns venue name as a header', () => {
    expect(
            wrapper.containsMatchingElement(
                <h1>Crisis Cafe</h1>
            )
        ).toBeTruthy()
  })
})
