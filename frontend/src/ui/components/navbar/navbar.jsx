import React, { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { Switcher } from '../../../utils/index.js';
import logo from '../../../assets/logo.svg';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

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
    <nav className="bg-primary-light-250 dark:bg-primary-dark-250">
      <div className="container flex justify-between items-center py-5 ">
        <div className="w-12 mx-14 ">
          <img src={logo} className="dark:invert"/>
        </div>
        <div className="flex mx-14 bg-primary-light-250 dark:bg-primary-dark-250">
          <Menu placement="bottom">
            <MenuHandler className="bg-primary-light-450 dark:bg-primary-dark-350 text-primary-light-750 dark:text-primary-dark-50">
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList className="flex p-1 bg-primary-light-450 dark:bg-primary-dark-350 border-none text-primary-light-700 dark:text-white">
              <MenuItem>
                <Switcher className="bg-primary-light-450 text-primary-light-700 dark:bg-primary-dark-350 " />
              </MenuItem>
              <MenuItem>
                <FaUser size="1.25rem" />
              </MenuItem>
              <MenuItem>
                <FaSearch size="1.25rem" />
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
