import { FaUser } from 'react-icons/fa6';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import logo from '../../../assets/logo.svg';
import searchIcon from '../../../assets/images/navbar/Group.png'
import { Switcher } from '../../../utils';


export function Navbar() {
  return (
    <nav className="bg-primary-light-300 dark:bg-primary-light-500">
      <div className="container flex justify-between items-center py-5">
        <div className='flex '>
          
          <img src={logo} width="50px" />
          
        </div>
        <div>
          <Menu>
          <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <MenuItems>
          <div>
          <MenuItem><Switcher></Switcher></MenuItem>
          <MenuItem><FaUser size="24px" /></MenuItem>
          <MenuItem><img src={searchIcon} className='w-6'></img></MenuItem>
          </div>
          </MenuItems>
        </MenuButton>
      </div>
          </Menu>
        
          
          
        </div>
      </div>
    </nav>
  );
}
