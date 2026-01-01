import { useState } from "react";
import logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/shopping-cart.svg";
import user from "../assets/user.svg";
import searchGreen from "../assets/search-line.svg"

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-green-900 text-neutral-50 ">
      <div className="pt-4 flex items-center justify-between max-w-9/10 mx-auto">
      <nav className="hidden md:flex gap-6 text-m">
        <a href="#">Shop</a>
        <a href="#">Products</a>
        <a href="#">About</a>
      </nav>

      <img className="justify-center-safe" src={logo}/>

      <div className="flex gap-6">
        <img src={search} alt="Search" className="cursor-pointer  hover:opacity-80" onClick={() => setShowSearch(!showSearch)}/>

        {showSearch && (
          <div className="flex absolute top-1/8 left-1/20 w-18/20 justify-between gap-3">
          <input
            type="text"
            placeholder="Search by Oil-Name"
            autoFocus
            className="bg-white text-green-700 py-3 pl-5 w-10/10 border-none outline-none rounded-xs"
          />
          <img src={searchGreen} className="bg-white px-[10px] rounded-xs"/>
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
