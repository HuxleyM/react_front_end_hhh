import Donation from '../components/donation.js'
import React, {Component} from 'react';
import {shallow, mount, render} from 'enzyme'
import DonationForm from '../components/donationsForm.js';



describe('DonationForm', () => {

    const Donationform = mount(<DonationForm/>)

    xit('has a handle submit', ()=>{
        expect(Donationform.state('submit')).toBe()
    })
})