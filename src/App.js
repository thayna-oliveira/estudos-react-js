import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      frase: ''
    };

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Não há que ser forte. Há que ser flexível.',
      'Siga os bons e aprenda com eles.',
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',
      'O bom-senso vai mais longe do que muito conhecimento.',
      'Quem quer colher rosas deve suportar os espinhos.',
      'São os nossos amigos que nos ensinam as mais valiosas lições.'
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

  }

  quebraBiscoito(){
    let state = this.state;
    let numero = Math.floor(Math.random() * this.frases.length);
    state.frase = '"' + this.frases[numero] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={require('./assets/biscoito.png')}></img>
        <Botao nome='Abrir biscoito' acao={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.frase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.acao}>{this.props.nome}</button>
      </div>
    );
  };
}

export default App;
