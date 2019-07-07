import React, { Component } from 'react';

class Filme extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filme: []
    };

  }

  componentDidMount() {
    const { id } = this.props.match.params;

    let url = `http://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ filme: json });
      });
  }
  render() {
    return (
      <div className="container">

        <div className="coming">
          <h1>{this.state.filme.nome}</h1>
          <div className="separador" />
        </div>

        <div className="cover">
          <img alt={this.state.filme.nome} src={this.state.filme.foto}></img>
        </div>
        
        <div className="sinopse">
          <h3>Sinopse:</h3>
          <p>{this.state.filme.sinopse}</p>
        </div>
            
      </div>
    );
  }
}

export default Filme;
