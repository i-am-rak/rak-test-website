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
                <h2>
                    Anuraag Shankar
          	     </h2>
                <div className = "App-header-p">
                    Junior Software Developer
                </div>
                        <div className = "App-header-p">
                    Scroll down to learn more about me!
                </div>
                <br></br>
                <br></br>
                <br></br>
                <img src={down} alt="down" className = "App-down"/>
       	    </header>
              <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>

    	</div>
        

    );
  }
}

export default App;
