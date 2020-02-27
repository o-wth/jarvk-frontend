import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.props.onNavOpenChange();
  }

  render() {
    let closedDrawer = "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z";
    let openDrawer = "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z";
    return (
      <div className="flex bg-white border-gray-200 h-20 fixed items-center w-full px-6 p-4 border-gray-300 border z-50">
        <div className="w-full relative mx-auto">
          <div className="flex items-center">
            <div className="flex flex-grow items-center md:w-1/4 xl:w-1/5">
              <svg 
                onClick={this.toggleSidebar}
                className="fill-current w-4 h-4 mr-4 block lg:hidden" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"
              >
                <path d={this.props.open ? openDrawer : closedDrawer}></path>
              </svg>
              <div className="text-xl font-semibold text-purple-600">Jarvk</div>
            </div>
            <div className="flex flex-grow md:w-3/4 lg:w-3/4 xl:w-4/5">
              <div className="hidden md:flex relative w-full lg:3/4">
                <input
                  id="searchall"
                  className="shadow-md w-full h-12 text-base transitions-colors duration-100 ease-in-out bg-gray-200 outline-none text-gray-600 placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block appearance-none leading-normal ds-input"
                  placeholder="Search..."
                ></input>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                  <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
                </div>
              </div>
              <div className="relative flex justify-end items-center w-full lg:1/4">
                <div className="text-gray-800 mr-4">Stephen Stern</div>
                <img className="h-10 rounded-full" src="https://pbs.twimg.com/media/ERQuXlhXsAAUwnG?format=jpg&name=large"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
