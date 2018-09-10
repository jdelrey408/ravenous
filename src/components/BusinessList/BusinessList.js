import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          /*this creates a new prop named business which iterates through businesses object in app.js */
          /*Created a list of businesses using an array, rather than repeating components in BusinessList.js*/
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;
