import React, { Component } from 'react';
import logo from './logo.svg';
import down from './down.png';
import SideBar from './sidebar';

import './App.css';
import {
    Card,
    Button,
    CardTitle,
    CardText,
} from 'reactstrap';



class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
  render() {
    return (
		<div className="App">
			<SideBar />

            <header className="App-header">
                <img src={logo} alt="logo" className = "App-icon"/>
                <h1 className = "App-header-t">
                    Anuraag Shankar
          	     </h1>
                <div className = "App-header-p">
                    Developer | Designer | Creator
                </div>
                        <div className = "App-header-p">
                    Use the sidebar on the left to learn more about me!
                </div>
                <br></br>
                <br></br>
                <br></br>
                <img src={down} alt="down" className = "App-down"/>
       	    </header>
   


    	</div>
        

    );
  }
}

export default App;
