import React, { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa6';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import logo from '../../../assets/LOGO.svg';
import searchIcon from '../../../assets/images/navbar/Group.png';
import { Switcher } from '../../../utils';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <nav
    className={`fixed top-0 w-full z-10 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    } bg-transparent shadow-md`}
  >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center dark:invert">
          <img src={logo} alt="Logo" width="50px" />
        </div>

        {/* Menu Dropdown */}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none">
            Options
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <MenuItem as="div" className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                <Switcher />
                <span className="ml-2 text-sm">Switcher</span>
              </MenuItem>
              <MenuItem as="div" className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                <FaUser size="20px" />
                <span className="ml-2 text-sm">User</span>
              </MenuItem>
              <MenuItem as="div" className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
                <span className="ml-2 text-sm">Search</span>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}
