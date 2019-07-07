import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="navbar"> 
        <div className="container">
          <div className="header">
            <div className="logo"><h1>Popcorn.</h1></div>
            <ul className="nav">
              <li><Link to="/dsasa">Pagina Inicial</Link></li>
              <li><Link to="/dsasa">Novidades</Link></li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
