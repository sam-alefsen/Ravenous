import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

export default class BusinessList extends React.Component {
  getBusiness(business) {
    return <Business key={business.id} business={business} />
  }

  mapBusinesses(arr) {
    return arr.map((business, index) => {
      return this.getBusiness(business, index);
    });
  }

  render() {
    const businesses = this.props.businesses;
    return (
      <div className="BusinessList">
        {this.mapBusinesses(businesses)}
      </div>
    )
  }
}