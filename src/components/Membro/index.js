import React, { Component } from 'react';

class Membro extends Component {

  constructor(props){
    super(props);

    this.state = {
      nome: props.nome
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    this.setState({nome: 'Matheus'});
  }

  render() {
    return (
      <div>
        <h1>Olá {this.state.nome}</h1>
        <button onClick={this.entrar}>Acessar</button>
        <button onClick={() => this.setState({nome: 'Visitante'})}>Sair</button>
      </div>
    );
  }

}


export default Membro;
