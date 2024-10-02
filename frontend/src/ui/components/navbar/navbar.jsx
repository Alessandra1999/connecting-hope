import { FaUser } from 'react-icons/fa6';

import logo from '../../../assets/logo.svg';

export function Navbar() {
  return (
    <nav className="bg-primary-light-300">
      <div className="container flex justify-between items-center py-5">
        <div>
          <img src={logo} width="50px" />
        </div>
        <div>
          <FaUser size="24px" />
        </div>
      </div>
    </nav>
  );
}
