import React, {Component} from 'react'; 
import firebase from 'firebase';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {};

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
  }

  render(){
    return (
      <div>Funcionando!</div>
    );
  }
}