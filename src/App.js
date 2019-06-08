import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      sexo: ''
    };

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSenha = this.trocaSenha.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);

  }

  trocaEmail(e) {
    this.setState({ email: e.target.value });
  }

  trocaSenha(e) {
    this.setState({ senha: e.target.value });
  }

  trocaSexo(e) {
    this.setState({ sexo: e.target.value });
  }

  render() {
    return (
      <div>
        E-mail:
        <input type="email" name="email" value={this.state.email}
          onChange={this.trocaEmail}></input>
        <br></br>
        Senha:
        <input type="password" name="senha" value={this.state.senha}
          onChange={this.trocaSenha}></input>
        <br />
        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="">Selecione...</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>

        <h2>{this.state.email}</h2>
        <h2>{this.state.senha}</h2>
        <h2>{this.state.sexo}</h2>
      </div>
    );
  }
}


export default App;
