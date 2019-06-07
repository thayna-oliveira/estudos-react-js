import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true
    };

    this.logoff = this.logoff.bind(this);
    this.login = this.login.bind(this);
  }

  logoff(){
    this.setState({status: false});
  }

  login(){
    this.setState({status: true});
  }

  render() {
    return (
      <div>
        {
          this.state.status ?
            <div>
              <h1>Bem-vindo ao sistema</h1>
              <button onClick={this.logoff}>Fazer logoff</button>
            </div> :
            <div>
              <h1>Olá visitante, faça o login!</h1>
              <button onClick={this.login}>Fazer login</button>
            </div>
        }
      </div>
    );
  }
}


export default App;
