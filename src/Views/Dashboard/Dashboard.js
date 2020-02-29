import React from 'react';
import classNames from 'classnames';

import './Dashboard.scss';
import 'styles/colors.scss';
import DashboardCard from './DashboardCard/DashboardCard';

import heartSVG from './images/dashboard_heart.svg';
import lungSVG from './images/dashboard_lung.svg';
import neurologicalSVG from './images/dashboard_brain.svg';
import cancerSVG from './images/dashboard_cancer.svg';
import cautionsSVG from './images/dashboard_cautions.svg';


class Dashboard extends React.Component {
  render() {
    let rowClass = classNames("flex flex-wrap flex-col md:flex-row w-full dashboard max-w-screen-lg");

    return (
      <div className="flex flex-wrap w-full lg:-mx-4 -my-4">
        <div className={rowClass}>
          <DashboardCard img={heartSVG} title="Heart" className="red text-white" flex="3">
            <span className="z-10">Risks: Heart Attack</span>
          </DashboardCard>
          <DashboardCard img={lungSVG} title="Lung" className="purple text-white" flex="4">
            <span className="z-10">Risks: Asthma</span>
          </DashboardCard>
        </div>
        <div className={rowClass}>
          <DashboardCard img={neurologicalSVG} title="Neurological" className="green" flex="1">
            <span className="z-10">Risks: Parkinsons, Alzheimers</span>
          </DashboardCard>
          <DashboardCard img={cancerSVG} title="Cancer" className="darkblue text-white" flex="1">
            <span className="z-10">Deteced types: None</span>
          </DashboardCard>
          <DashboardCard img={cautionsSVG} title="Cautions" className="yellow" flex="1">
            <span className="z-10">Other Risks: Influenza</span>
          </DashboardCard>
        </div>
      </div>
    );
  }
}

export default Dashboard;