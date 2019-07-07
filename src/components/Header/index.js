import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return ( 
        <header className="header">
            <strong>Meu projeto (Header)</strong> 
            <Link to="/">Pagina Inicial</Link> 
        </header> 
    );
  }
}

export default Header;
