import React from 'react';
import { Link } from 'react-router-dom';

import './DashboardCard.scss';

class DashboardCard extends React.Component {
  render() {
    return (
      <Link 
        to="/" 
        style={{flex: this.props.flex ?? 1}} 
        className={"dash-card rounded-lg relative shadow-lg hover:shadow-xl outline-none overflow-hidden " + this.props.className}
      >
        <img className="absolute object-cover w-full h-full top-0" src={this.props.img}></img>
        <div class="w-full h-full p-6 flex flex-col justify-end">
          <span className="card-title">{this.props.title}</span>
          {this.props.children}
        </div>
      </Link>
    )
  }
}

export default DashboardCard