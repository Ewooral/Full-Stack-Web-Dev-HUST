import '../App.css';
import { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../features/Features';
// import Increment from './components/class/Increment';
import DefaultProps from '../features/TS/DefaultProps';
import UseState from '../hooks/UseState';
import {  Route, RouterProvider, createBrowserRouter, Router } from 'react-router-dom'

class BaseTemp extends Component {
  render() {
   
    return (
      <div className="container-fluid ">
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
        {/* <Increment /> */}

        {/* TYPESCRIPT WITH REACT TUTORIAL */}
        <div className="mx-auto bg-slate-200 md:space-y-0 md:flex-row flex">
          <div className="p-5  lg:ml-7">
            <DefaultProps />
          </div>

          <div className="p-5">
            <UseState />
          </div>
        </div>
      </div>
    );
  }
}


//home/fspoon/Devops/projects/node_modules/typescript
export default BaseTemp;
