import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Increment from './components/class/Increment';


class App extends Component{
  
  render(){
    return (
      <div>
        {/* NAVBAR SECTION */}
        <Navbar />

        {/* HERO SECTION */}
        <Hero />

        {/* FEATURES SECTION */}
        <Features />

        {/* TRY Feature */}
        <Increment />
      </div>
    );
  }
  
}

export default App;
