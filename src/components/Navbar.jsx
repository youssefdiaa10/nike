import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat font-bold leading-normal text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/" className="hover:text-coral-red">
            Sign in
          </a>
          <span>/</span>
          <a href="/" className="hover:text-coral-red">
            Explore now
          </a>
        </div>

        <div className="hidden max-lg:block fl">
          <img
            src={hamburger}
            alt="hamburger"
            className="w-[28px] h-[28px] object-contain"
            onClick={handleToggle}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-coral-red absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`font-palanquin font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a
                    href={link.href}
                    className="font-sans text-black hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
