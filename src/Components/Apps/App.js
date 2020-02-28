import React from 'react';
import './App.scss';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.onNavOpenChange = this.onNavOpenChange.bind(this);
  }

  onNavOpenChange() {
    this.setState(state => ({
      isOpen: !state.isOpen,
      width: state.width,
      height: state.height,
    }))
  }

  render() {
    return (
      <Router>
        <div className="App bg-main">
          <Navbar onNavOpenChange={this.onNavOpenChange} open={this.state.isOpen}/>
          <div className="w-full mx-auto px-6 h-full min-h-screen">
            <Sidebar open={this.state.isOpen}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
