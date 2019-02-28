import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import SignIn from '../../../components/venueSignin.js';

describe('Sign In Fetch request', () => {
  let mockEvent;
  let mocksetVenue;
  let mockVenue;
  let mockResponse;
  let wrapper;
  let flushPromises;
  beforeEach(() => {
  flushPromises = () => {
  return new Promise(resolve => setImmediate(resolve));
};

    mockEvent = { preventDefault: jest.fn()};
    mocksetVenue = jest.fn();
    mockVenue = {
     email: 'test@test.com',
     password: 'password'
   }
   mockResponse = { venue: [{
     id: 1,
     name: 'test',
     address: '22 testytwo street',
     email: 'test@test.com',
     password: 'password'
     }]
   }

   window.fetch = jest.fn().mockImplementation(() => {
     return Promise.resolve({
     json: (() => {
       return Promise.resolve({
       venue: mockResponse
     })
   })
   })
 })

    wrapper = mount(<SignIn/>,
    { attachTo: document.body })
  })


  it('calls fetch with the correct data when signing in',  () => {
    const expectedFetchBody = {
      method: 'POST',
      body: JSON.stringify({ venue: mockVenue }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    wrapper.instance().sendVenue('test@test.com', 'password')

    expect(window.fetch).toHaveBeenCalledWith('https://enigmatic-badlands-83570.herokuapp.com/signin', expectedFetchBody)
  })

  // it('sets the state of venueSignedIn to the parsed response', () => {
  //
  // })
  //
  // it('calls _setVenue when adding a new venue', () => {
  //
  // })
})
