import React from 'react';
//import axios from 'axios';
import Home from './Home';
import Login from './login.js';  
import fire from './config/firebase';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      user: null
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({ user });
      } else{
        this.setState({ user:null });
      }
    })
  }

  render(){
  return(
    <div className="App"> 
   {this.state.user ? (<Home />): (<Login user={this.state.user}/>) }
  
    </div>
  );
}
}

export default App;
