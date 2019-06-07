import React, { Component } from 'react';

class Feed extends Component {

  render() {
    return (
        <div key={this.props.id}>
          <h3>Nome: {this.props.username}</h3>
          <a>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' :
              this.props.curtidas + ' curtida'} / {this.props.comentarios > 1 ? this.props.comentarios + ' comentários' :
              'Nenhum comentário. Seja o primeiro a comentar.'} </a>
          <hr></hr>
        </div>
      );
  }

}


export default Feed;
