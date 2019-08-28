import React, {Component} from 'react'; 
import firebase from 'firebase';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      token: 'Carregando...',
      nome: '',
      idade: ''
    };

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

    /* firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });*/

    firebase.database().ref('token').once('value').then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    firebase.database().ref('usuarios').child(2).once('value').then((snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });

  }

  render(){

    const {token, nome, idade} = this.state;
    return (
      <div>
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}