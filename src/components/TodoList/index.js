import React, { Component } from 'react'; 

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tarefa: '',
      items:  []
    };
  }

  

  render() {
    return (
      <div className="container">

        <form>
            <input type="text" placeholder="Nova tarefa?"
            name="tarefa" value={this.state.tarefa} onChange={(ev) => this.setState({tarefa: ev.target.value})}/>
            </form> 
      </div>
    );
  }
}

export default TodoList;
