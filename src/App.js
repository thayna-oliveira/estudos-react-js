import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numero: 0,
      botao: "Iniciar"
    }
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  vai() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "Iniciar";
     
    } else {
      state.botao = "Pausar"; 
      this.timer = setInterval(() => {
        let state = this.state; 
        state.numero += 0.1;
        this.setState(state);
      }, 100);
    }

    this.setState(state);
  }

  limpar() {

    let state = this.state;
    clearInterval(this.timer);
    this.timer = null;
    state.numero = 0;
    state.botao = "Iniciar";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={require('./assets/cronometro.png')} />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a>
          <a classname="botao" onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    );
  }
}

export default App;
