import React, { Component } from 'react';
import TodoItems from '../TodoItems'; 

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tarefa: '',
      items: []
    };

    this.adicionarItem = this.adicionarItem.bind(this);
    this.log = this.log.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  adicionarItem(e) {
    let state = this.state;

    if (this._tarefaInput.value !== '') {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      };

      this.setState({ items: [...state.items, newItem] });
    }

    e.preventDefault();
    this.setState({ tarefa: '' });
  }

  log() {

    console.log(this.state.items);

  }

  deleteItem(key) {

    let filtro = this.state.items.filter((item) => {
      return (item.key !== key);
    });

    this.setState({ items: filtro });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.adicionarItem}>
          <input type="text" placeholder="Nova tarefa?"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(ev) => this.setState({ tarefa: ev.target.value })}
            ref={(event) => this._tarefaInput = event} />

          <button className="addBtn" type="submit">
            Adicionar
            </button>
        </form>

        <TodoItems lista={this.state.items} delete={this.deleteItem}></TodoItems>


      </div>
    );
  }
}

export default TodoList;
