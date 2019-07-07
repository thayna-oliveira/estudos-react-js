import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filmes: []
    };

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    //url da API http://sujeitoprogramador.com/r-api/?api=filmes
    let url = 'http://sujeitoprogramador.com/r-api/?api=filmes';
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ filmes: json });
      });
  }

  render() {
    return (
      <div className="container">

        <div class="coming">
          <h1>Coming Soon</h1>
          <div className="separador" />
        </div>

        <div className="list">
          {this.state.filmes.map((filme, index) => {

            return (
              <article className="card" key={filme.id}>
                <div className="card-inner">
                  <div className="card-header">
                    <img alt={filme.nome} src={filme.foto}></img>
                  </div>
                  <div className="card-description">
                    <h2>{filme.nome}</h2>
                    <Link to="/" className="btn">veja mais</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

    );
  }
}

export default Home;
