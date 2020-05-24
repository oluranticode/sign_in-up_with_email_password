import React from 'react';
import fire from './config/firebase.js';
import Home from './Home';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            header: ''
        }
    }

    signin = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("user signed in");
        })
        .catch((err) => {
            alert("Error: " + err.toString());
    })
    }

    signup = () => {
        const email = document.querySelector("#email1").value;
        const password = document.querySelector("#password1").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("user signed up");
        })
        .catch((err) => {
            alert("Error: " + err.toString());
    })
    }

    getEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

 //header = <p>{this.state.email} has successfully signed in</p>

    getSubmit = (event) => {
        event.preventDefault(); 
    // const header = this.state.email + " success";
     //document.getElementById('header').innerHTML = this.state.email + " success";
     //alert("You are submitting " + this.state.email);
     this.setState({
        header: this.state.email + "success", 
     });
      
    }

    // let header = '';
    //     if (this.state.email) {
    //         header = <p>{this.state.email} has successfully signed in</p>;
    //     } else {
    //         header = ' ';
    //     }
    
    render(){
        
        return(
            <div style={{textAlign: "center"}}>

            <form onSubmit={this.getSubmit}>
           <h1 id="header"> Registration Form with firebase </h1>
            <div className="signin">
            <div>
            <h1 className="head1">SIGN IN</h1>
            
            <input id="email" type="email" placeholder="Enter Your Email" onChange={this.getEmail}
            className="signinput" />
            </div>
            <div>
           
            <input id="password" type="password" placeholder="Enter your password" type="password"
            className="signinput" />
            </div>
            <button type="submit" onClick={this.signin} className="btnIn">sign in</button>
            </div>



            <div className="signup">
            <div>
            <h1 className="head2">SIGN UP</h1>
           
            <input id="email1" type="email" placeholder="Enter Your Email"  onChange={this.getEmail} 
            className="signinput1"/>
            </div>
            <div>
            
            <input id="password1" type="password" placeholder="Enter your password" type="password"
            className="signinput1"/>
            </div>
            <button type="submit" onClick={this.signup} className="btnUp">sign up</button>
            </div>
            </form>

            
            
            {this.props.user ? (<Home header={this.state.header} />) : null}

            </div>
        );
    }
}

export default Login;
