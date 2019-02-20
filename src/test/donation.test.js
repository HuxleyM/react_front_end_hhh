import Donation from '../components/donation.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'

const venue ={"id":1,"name":"Crisis Cafe","address":"Commercial Street","created_at":"2019-02-19T16:41:39.478Z","updated_at":"2019-02-19T16:41:39.478Z","donations":[]}

describe('Donation', () => {

  const wrapper = mount(
    <Donation
     venue={venue}
    />
  )

  it('displays a div', () => {
    expect(wrapper.find(<div></div>)).toBeTruthy();
  })

  it('check correct venue is present in state', () => {
    expect(wrapper.state('venue')).toEqual(venue)
  })

  it('renders a form if donation length < 1', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('div h1').text()).toBe('FORM');
  })
})
