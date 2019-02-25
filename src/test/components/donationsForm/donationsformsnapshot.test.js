import React, { Component } from 'React';
import { create } from "react-test-renderer";
import DonationForm from '../../../components/donationsForm'


describe("Donations Form", () => {
  test("it matches the snapshot", () => {
    const component = create(<DonationForm />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
