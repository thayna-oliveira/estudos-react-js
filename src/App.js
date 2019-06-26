import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './style.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }



  render() {
    return (
      <div className="container">

        <div className="box">
          <header>
            <h1>Lista de Tarefas</h1>
          </header>

          <TodoList></TodoList>
        </div>

      </div>
    );
  }
}

export default App;
