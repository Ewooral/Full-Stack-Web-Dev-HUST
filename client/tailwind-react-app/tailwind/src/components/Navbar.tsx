import React from 'react'
import Logo from '../assets/img/logo.svg'

const Navbar = () => {
  return (
    <>
      <nav className="relative container p-6">

        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src={Logo} alt="logo" />
          </div>

          {/* Menu Items */}
          <div className="hidden sm:flex space-x-6">
            <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
            <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
            <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
          </div>

          {/* Button */}
          <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed 
            rounded-full baseline">

          </a>

        </div>
      </nav>
    </>
  )
}

export default Navbar