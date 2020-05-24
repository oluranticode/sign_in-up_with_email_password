import React from 'react';
import fire from './config/firebase';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    signout = ( ) => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <h1>{this.props.header} is logged in...</h1>
                <button type="button" onClick={this.signout}>Sign Out</button>
            </div>
        );
    }
}

export default Home;
