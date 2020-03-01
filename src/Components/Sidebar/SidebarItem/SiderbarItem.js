import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarItem.scss';


class SidebarItem extends React.Component {
  render() {
    return (
      <div className="flex-col p-6 rounded-lg shadow-lg bg-accent">
        <ul>
          <li className="mb-2">
            <div className="font-semibold text-accent-dark text-lg" >{this.props.title}</div>
          </li>
          {this.props.links.map((value, _) => {
            return (
              <li className="my-2" key={value.title}>
                <NavLink 
                  exact 
                  className="text-gray-300 w-full flex items-center" 
                  activeClassName="text-white font-semibold" 
                  to={value.href}
                  onClick={this.props.onLinkClick}
                >
                  <value.icon />
                  <div className="ml-2">{value.title}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SidebarItem;