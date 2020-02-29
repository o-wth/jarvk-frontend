import React from 'react';
import './Dashboard.scss';
import 'styles/colors.scss';
import DashboardCard from './DashboardCard/DashboardCard';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap w-full lg:-mx-4 -my-4">
        <div className="flex flex-wrap w-full dashboard max-w-screen-lg">
          <DashboardCard className="yel" flex="3"/>
          <DashboardCard className="bg-accent-green" flex="4" />
        </div>
        <div className="flex flex-wrap w-full dashboard max-w-screen-lg">
          <DashboardCard className="yel" flex="1"/>
          <DashboardCard className="bg-accent-green" flex="1" />
          <DashboardCard className="bg-accent-green" flex="1" />
        </div>
      </div>
    );
  }
}

export default Dashboard;