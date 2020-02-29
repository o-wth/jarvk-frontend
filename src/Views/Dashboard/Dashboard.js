import React from 'react';
import classNames from 'classnames';

import './Dashboard.scss';
import 'styles/colors.scss';
import DashboardCard from './DashboardCard/DashboardCard';

class Dashboard extends React.Component {
  render() {
    let rowClass = classNames("flex flex-wrap flex-col md:flex-row w-full dashboard max-w-screen-lg");

    return (
      <div className="flex flex-wrap w-full lg:-mx-4 -my-4">
        <div className={rowClass}>
          <DashboardCard className="yel" flex="3"/>
          <DashboardCard className="bg-accent-green" flex="4" />
        </div>
        <div className={rowClass}>
          <DashboardCard className="yel" flex="1"/>
          <DashboardCard className="bg-accent-green" flex="1" />
          <DashboardCard className="bg-accent-green" flex="1" />
        </div>
      </div>
    );
  }
}

export default Dashboard;