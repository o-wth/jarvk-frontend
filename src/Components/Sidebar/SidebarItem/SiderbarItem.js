import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarItem.scss';


class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex-col p-6 bg-white rounded-lg shadow-2xl">
        <ul>
          <li className="mb-2">
            <div className="font-semibold text-purple-600 text-lg" >{this.props.title}</div>
          </li>
          {this.props.links.map((value, _) => {
            return (
              <li className="my-2" key={value.title}>
                <NavLink exact className="text-gray-600 w-full flex items-center" activeClassName="text-gray-700 font-semibold" to={value.href}>
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