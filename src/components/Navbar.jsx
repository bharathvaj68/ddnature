import { useState } from "react";
import logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/shopping-cart.svg";
import user from "../assets/user.svg";
import searchGreen from "../assets/search-line.svg";
import About from "./About";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showOption, setShowOption] = useState(false);

  return (
    <header className="bg-green-900 text-neutral-50 ">
      <div className="pt-4 flex items-center justify-between max-w-9/10 mx-auto">
        <button
          type="button"
          className="sm:hidden inline-flex items-center p-2 w-10 h-10 justify-center  rounded-base hover:bg-neutral-tertiary hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          onClick={() => setShowOption(!showOption)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden sm:flex flex-row">
          <ul className="sm:flex flex-row hidden md:flex gap-6 text-m ">
            <li>
              <a
                href="#products"
                className=""
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#about"
                className=""
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=""
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <img className="justify-center-safe" src={logo} />

        <div className="flex gap-6">
          <img src={search} alt="Search" className="cursor-pointer  hover:opacity-80" onClick={() => setShowSearch(!showSearch)} />

          
          <img src={cart} className="hidden sm:block"/>
          <img src={user} />
        </div>
      </div>

      {showOption && (
        <div className="">
          <ul className="top-30 flex flex-col bg-white text-green-700 my-2 border-none space-y-2 ">
            <li>
              <a
                href="#products"
                className="block py-2 px-3 text-m active:text-white active:bg-green-700 hover:bg-neutral-tertiary hover:bg-transparent border-0 hover:text-fg-brand p-0"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-m active:text-white active:bg-green-700 hover:bg-neutral-tertiary hover:bg-transparent border-0 hover:text-fg-brand p-0"
              >
                Cart
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-m active:text-white active:bg-green-700 hover:bg-neutral-tertiary hover:bg-transparent border-0 hover:text-fg-brand p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-m active:text-white active:bg-green-700 hover:bg-neutral-tertiary hover:bg-transparent border-0 hover:text-fg-brand p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {showSearch && (
            <div className="flex relative top-1/8 left-1/20 w-18/20 justify-between gap-3">
              <input
                type="text"
                placeholder="Search by Oil-Name"
                autoFocus
                className="bg-white text-green-700 py-3 pl-5 w-10/10 border-none outline-none rounded-xs"
              />
              <img
                src={searchGreen}
                className="bg-white px-[10px] rounded-xs"
              />
            </div>
          )}

    </header>
  );
};

export default Navbar;
