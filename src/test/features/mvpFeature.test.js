import App from '../../App'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'


describe('MVP feature', () => {
  xit('You can choose a venue from list, see details and donate', () => {
    const wrapper = mount(<App />)

    const viewButton = wrapper.findWhere(
      n => n.type() === 'button' && n.contains('view')
    );
    viewButton.at(0).simulate('click')
    const donateButton = wrapper.findWhere(
      n => n.type() === 'button' && n.contains('donate')
    );
    donateButton.simulate('click')
    // input.simulate('amount', { target: { value: '1' } })
    // input.simulate('passphrase', { target: { value: 'react' } })
    const input = wrapper.find('amount')
    input.value = 1.00
    const passphrase = wrapper.find('passphrase')
    passphrase.value = 'react'
    wrapper.find('confirm donation').simulate('click')
    expect(wrapper.find('div').text).toContain('crisis cafe')
    expect(wrapper.find('div').text).toContain('£1.00')
  })
})
