import React, {Component} from 'react'

export default class FullDonationList extends Component {
  constructor(props) {
    super(props);
    }

    render() {
      const { donations } = this.props;

      const list = donations && donations.map(donation => {
        return (
          <p>
          <li> {donation.id} {donation.created_at} {donation.amount} </li>
          </p>
        )
      })
      return (
        <div>
        <ul> {list} </ul>
        </div>
      )
    }
   }
