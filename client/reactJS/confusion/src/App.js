import { Component } from "react";
import './App.css'
// import Logo from './assets/images/logo.png';
import Menu from "./components/Menu";
import { DISHES } from "./shared/dishes"

//  class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      LISTS: DISHES
        
    };

  }

  render() {
    return (
      <>
        <div className="relative container-fluid">
          <Menu myList={this.state.LISTS} />
        </div>
      </>
    )
  }
}

export default App

