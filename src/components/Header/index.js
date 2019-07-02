import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div>

        <header>
            <strong>Meu projeto (Header)</strong>
            <hr></hr> 
            <Link to="/">Pagina Inicial</Link>
            <Link to="/about">Sobre nós</Link>
        </header>

      </div>
    );
  }
}

export default Header;
