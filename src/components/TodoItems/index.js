import React, { Component } from 'react';

class TodoItems extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        };

        this.remover = this.remover.bind(this);
    }

    remover(key){

        this.props.delete(key);

    }

    render() {
        return (
            <ul>
                <h2>Log de Atividades</h2>
                {this.props.lista.map((item) => {
                    return (
                        <li onClick={ () => this.remover(item.key)} key={item.key}>{item.text}</li>
                    );
                })}
            </ul>
        );
    }
}

export default TodoItems;
