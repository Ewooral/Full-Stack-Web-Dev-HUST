import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">Hi, Welcome!</h1>
       <h1 className="text-3xl">Hello</h1>
      </div>

    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Welcome />


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
