import React, { Component } from 'react'; 
import Routes from './routes.js'; 
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        <Routes/>
      </div>
    );
  }
}

export default App;
