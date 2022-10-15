import { ReactElement } from 'react';
import Logo from '../assets/img/logo.svg';

const Navbar = ({
  navbutton,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5
}: {
  navbutton: string;
  menu1: string;
  menu2: string;
  menu3: string;
  menu4: string;
  menu5: string;
}): ReactElement => {
  return (
    <>
      <nav className="relative  p-6">
        <div className="flex items-center justify-evenly">
          {/* logo */}
          <div className="pt-2">
            <img src={Logo} alt="logo" />
          </div>

          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              {menu1}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              {menu2}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              {menu3}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              {menu4}
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              {menu5}
            </a>
          </div>
          {/* Button */}
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed 
            rounded-full baseline hover:bg-brightRedLight md:block "
          >
            {navbutton}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
