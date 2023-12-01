import { headerLogo } from "../assets/images";
import { cart, hamburger, instagram } from '../assets/icons';

import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className='flex justify-around items-center py-4 px-16'>

      <img src={instagram} alt="instagram" width={25} height={25} />

      <nav className='flex flex-col items-center justify-center max-w-xl'>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
        <a href="#">
          <img src={headerLogo} alt="Logo" className="max-h-28 max-w-full" />
        </a>
        <ul className="flex justify-center flex-wrap inline-flex text-center my-4 mx-0 gap-5">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-proxima text-transform: uppercase text-sm">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="font-proxima flex text-center items-center gap-1">Login
      <img src={cart} alt="cart" width={30} height={30} />
      </h1>

    </header>
  )
}

export default Navbar
