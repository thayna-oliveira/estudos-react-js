import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Erro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div>

        <section>
           <h2>Ops, essa página não existe!</h2>
           <Link to="/">Pagina Inicial</Link>
            <Link to="/about">Sobre nós</Link>
        </section>

      </div>
    );
  }
}

export default Erro;
