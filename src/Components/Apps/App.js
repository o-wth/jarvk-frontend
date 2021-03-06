import React from 'react';

import './App.scss';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Dashboard from 'Views/Dashboard/Dashboard';
import Chat from 'Views/Chat/Chat';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onNavOpenChange = this.onNavOpenChange.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  onNavOpenChange() {
    this.setState(state => ({
      isOpen: !state.isOpen,
      width: state.width,
      height: state.height,
    }))
  }

  closeNav() {
    this.setState(state => ({
      isOpen: false,
      width: state.width,
      height: state.height,
    }));
  }

  render() {
    if(this.state.isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return (
      <Router>
        <div className="App">
          <Navbar onNavOpenChange={this.onNavOpenChange} open={this.state.isOpen}/>
          <div className="w-full mx-auto min-h-screen">
            <Sidebar open={this.state.isOpen} onLinkClick={this.closeNav}/>
            <div className="relative float-right flex flex-grow w-full h-full lg:w-3/4 xl:w-4/5 right-0 pt-20">
              <div className="py-2 lg:py-8 px-4 w-full h-full">
                <Switch>
                  <Route path="/diagnosis">
                    <Dashboard />
                  </Route>
                  <Route path="/chat">
                    <Chat />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
