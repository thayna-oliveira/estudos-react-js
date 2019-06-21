import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  

  render() {
    return (
      <div className="container">

        <header>
            <strong>Lista de Tarefas Nutri</strong>
        </header>

        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
