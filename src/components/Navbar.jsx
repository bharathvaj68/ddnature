import { useState } from "react";
import logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/shopping-cart.svg";
import user from "../assets/user.svg";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-green-700 text-neutral-50 ">
      <div className="px-10 pt-4 flex items-center justify-between max-w-9/10 mx-auto">
      <nav className="hidden md:flex gap-6 text-m">
        <a href="#">Shop</a>
        <a href="#">Products</a>
        <a href="#">About</a>
      </nav>

      <img className="justify-center-safe" src={logo}/>

      <div className="flex gap-6">
        <img src={search} alt="Search" className="cursor-pointer hover:opacity-80" onClick={() => setShowSearch(!showSearch)}/>

        {showSearch && (
          <div className="flex absolute top-1/8 left-1/13 w-17/20 justify-between gap-5">
          <input
            type="text"
            placeholder="Search by Oil-Name"
            autoFocus
            className="bg-white text-green-700 py-2 pl-2 pr- w-10/10 border-0 rounded-xs"
          />
          <img src={search} className=""/>
          </div>
        )}

        <img src={cart}/>
        <img src={user}/> 
      </div>
    </div>
    </header>
  );
};

export default Navbar;
