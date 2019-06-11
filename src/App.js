import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        nome: '',
        email: '',
        senha: '',
        sexo: ''
      }
    };

    this.dadosForm = this.dadosForm.bind(this);
  }

  dadosForm(e){
      let form = this.state.form;
      form[e.target.name] = e.target.value;
      this.setState({form: form});
  }

  render() {
    return (
      <div>
        <h1>Login </h1>
        Nome:
        <input type="text" name="nome" value={this.state.form.nome}
          onChange={this.dadosForm}></input>

        E-mail:
        <input type="email" name="email" value={this.state.form.email}
          onChange={this.dadosForm}></input>

        Senha:
        <input type="password" name="senha" value={this.state.form.senha}
          onChange={this.dadosForm}></input>

        Sexo:
        <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>


        <div>
          <h2>Nome: {this.state.form.nome} |
          Email: {this.state.form.email} |
          Senha: {this.state.form.senha} |
          Sexo: {this.state.form.sexo}
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
