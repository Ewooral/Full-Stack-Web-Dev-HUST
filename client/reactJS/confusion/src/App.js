// import logo from './logo.svg';
import './App.css';
import { React, Component } from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/Menu.js';
import { DISHES } from './shared/dishes'

// functional component
function Start() {
  const rootElement =
    React.createElement("div", {},
      React.createElement("h1", {}, "Bookmarks"),
      React.createElement("ul", {},
        React.createElement("li", {},
          React.createElement("h2", {}, "Etherient"),
          React.createElement("a",
            { href: "https://www.etherient.com" },
            "The home page of Etherient"
          )
        ),
        React.createElement("li", {},
          React.createElement("h2", {},
            "Frank's Home"
          ),
          React.createElement("a",
            { href: "https://www.zammetti.com" },
            "The web home page of Frank Zammetti"
          )
        )
      )
    );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <Start />
    </>
  )

}

// class component
class App extends Component{

  // LIFTING STATE UP IN REACT
constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };

}
  render(){
    return(
        <div className="App">
          <Navbar className="primary">
            <div className="container">
              <NavbarBrand href="/">
              
              
                MY RESTAURANT
                <Menu dishes={this.state.dishes} />

              </NavbarBrand>
            </div>
          </Navbar>

        </div>
    )
}
}



export default App;
