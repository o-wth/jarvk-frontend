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
    // navOpen -1 means not toggled
    this.state = { width: 0, height: 0, isOpen: false };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onNavOpenChange = this.onNavOpenChange.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
        <div className="App">
          <Navbar onNavOpenChange={this.onNavOpenChange} open={this.state.isOpen}/>
          <div className="w-full mx-auto px-6 h-full min-h-screen">
            <div 
              className=""
            ><Sidebar open={this.state.isOpen}/></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
