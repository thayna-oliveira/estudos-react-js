import React, {Component} from 'react'; 
import firebase from 'firebase';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tokenInput: '',
      token: 'Carregando...',
      nome: '',
      idade: ''
    };

    this.cadastrar = this.cadastrar.bind(this);

    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: "AIzaSyDC4g-M_OsoPhi5GRjVUsu9SsTq9gGNSXA",
      authDomain: "reactapp-9eb60.firebaseapp.com",
      databaseURL: "https://reactapp-9eb60.firebaseio.com",
      projectId: "reactapp-9eb60",
      storageBucket: "",
      messagingSenderId: "935896278445",
      appId: "1:935896278445:web:b6d8cc16654e82c7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    /*firebase.database().ref('token').once('value').then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });*/

    firebase.database().ref('usuarios').child(2).once('value').then((snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });


  }

  cadastrar(e){

    firebase.database().ref('token').set(this.state.tokenInput); 

    e.preventDefault();
  }

  render(){

    const {token, nome, idade} = this.state;
    return (
      <div>
        <form onSubmit={this.cadastrar}>
          <input type="text" value={this.state.tokenInput}
              onChange={(e)=> this.setState({tokenInput: e.target.value})}/>
          <button type="submit">Cadastrar</button>
        </form>
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}