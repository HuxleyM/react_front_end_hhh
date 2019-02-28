import DonationStatus from '../components/donationStatus.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'

const donation = {
  id: 1,
  amount: 5,
  passphrase: "rhinounicorn"
}

describe('DonationStatus', () => {

  const wrapper = mount(
    <DonationStatus
     donation={donation}
    />
  )

  it('displays a div', () => {
    expect(wrapper.find(<div></div>)).toBeTruthy();
  })

  it('check correct donation is present in props', () => {
    expect(wrapper.props('donation')).toEqual(donation)
  })

  it('#redeemDonation starts false', () => {
    expect(wrapper.state('redeemed')).toBe(false)
  })

  it('#redeemDonation changes redeemed state to true', () => {
    expect(wrapper.find(<button/>))
    // expect(wrapper.state('redeemed')).toBe(true)
  })

  it('renders a donation list object', () => {
    expect(wrapper.find('li').text()).toContain(5);
    expect(wrapper.find('li').text()).toContain("rhinounicorn");
  })

})
