import React, {Component} from 'react'

export default class FullDonationList extends Component {

  formatDate(date) {
    let newDate = new Date(date)
    return `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`;
  }

  render() {
  const { donations } = this.props;

  const list = donations && donations.map(donation => {
  return (
      <p>
        <li> {donation.id} {this.formatDate(donation.created_at)} {donation.amount} </li>
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
// like this, refacoted line seven to string interpolation