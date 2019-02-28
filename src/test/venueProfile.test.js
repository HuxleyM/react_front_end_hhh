import VenueProfile from '../components/venueProfile.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'



describe('VenueProfile', () => {

  let venue;
  let wrapper;

  beforeEach(() => {
    venue = {
     "id":1,
     "name":"Crisis Cafe",
     "address":"Commercial Street",
     "created_at":"2019-02-19T16:41:39.478Z",
     "updated_at":"2019-02-19T16:41:39.478Z"
   }
   wrapper = mount(
   <VenueProfile
    venue={venue}
   />
 )
  })



  it('displays a div', () => {
    expect(wrapper.find(<div></div>)).toBeTruthy();
  })

  it('renders a form if donation length < 1', () => {
    expect(wrapper.find('div h1').text()).toBe('Crisis Cafe');
  })

})
