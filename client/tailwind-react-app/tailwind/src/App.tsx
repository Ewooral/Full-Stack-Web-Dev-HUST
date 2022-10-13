import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Increment from './components/class/Increment';


class App extends Component {

  render() {
    return (
      <div>
        {/* NAVBAR SECTION */}
        <Navbar
          navbutton="Get Started"
          menu1="Pricing"
          menu2="Product"
          menu3="About Us"
          menu4="Careers"
          menu5="Community"


        />

        {/* HERO SECTION */}
        <Hero get_started="Get Started" />

        {/* FEATURES SECTION */}
        <Features />

        {/* TRY Feature */}
        <Increment />
      </div>
    );
  }

}

export default App;
