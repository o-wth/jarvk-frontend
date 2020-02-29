import React from 'react';
import { Link } from 'react-router-dom';

import './DashboardCard.scss';

class DashboardCard extends React.Component {
  render() {
    return (
      <Link 
        to="/" 
        style={{flex: this.props.flex ?? 1}} 
        className={"dash-card rounded-lg relative shadow-lg hover:shadow-xl outline-none " + this.props.className}
      >

      </Link>
    )
  }
}

export default DashboardCard