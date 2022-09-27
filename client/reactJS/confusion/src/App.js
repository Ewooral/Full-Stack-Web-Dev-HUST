// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

// functional component


// class component
class App extends Component{
  render() {
    return(
        <div className="App">
          <Navbar className="primary">
            <div className="container">
              <NavbarBrand href="/">
                Ristorante ConFusion
                <Menu />
              </NavbarBrand>
            </div>
          </Navbar>

        </div>
    )
  }
}

export default App;
