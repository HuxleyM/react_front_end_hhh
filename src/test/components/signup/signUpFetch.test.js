import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from '../../../components/venueSignup';

describe('Sign up Fetch request', () => {
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
     name: 'test',
     address: '22 testytwo street',
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

    wrapper = mount(<SignUp/>,
    { attachTo: document.body })
  })


  it('calls fetch with the correct data when adding a new venue', async () => {
    const expectedFetchBody = {
      method: 'POST',
      body: JSON.stringify({ venue: mockVenue }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    wrapper.instance().sendVenue('test', '22 testytwo street', 'test@test.com', 'password')
    await flushPromises;
    expect(window.fetch).toHaveBeenCalledWith('https://enigmatic-badlands-83570.herokuapp.com/signup', expectedFetchBody)
  })
})
