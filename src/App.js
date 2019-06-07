import React, { Component } from 'react';
import Feed from './components/Feed'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      feed: [
        {id: 1, username: 'Matheus', curtidas: 30, comentarios: 35},
        {id: 2, username: 'Lucas', curtidas: 45, comentarios: 0}
      ]
    };

  }

  render() {
    return (
      <div>
      {this.state.feed.map((item) => {
        return (
          <Feed id={item.id} username={item.username}
          curtidas={item.curtidas} comentarios={item.comentarios}/>
        );
         })}
      </div>
    );
  }
}


export default App;
