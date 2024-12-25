import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import navLinksByRole from "../constants/navLinks";

function SideMenu({ role }) {
  const [isOpen, setIsOpen] = useState(false);
  const links = navLinksByRole[role];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="md:hidden bg-lightbg p-4 flex justify-between items-center shadow-md z-10">
        <img src={Logo} alt="pharma connect logo" className="h-8" />
        <button onClick={toggleMenu}>
          {isOpen ? (
            
            <p className="text-primary text-2xl"></p>  
          ) : (
            <p className="text-primary text-2xl">H</p>  
          )}
        </button>
      </div>

      {/* Side Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0 z-30" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <img src={Logo} alt="pharma connect logo" className="h-6" />
          <button onClick={toggleMenu}>
            <p className="text-primary text-2xl">X</p>  
          </button>
        </div>
        <nav className="mt-4 text-primary">
          <ul className="space-y-4 px-4">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-primary rounded-md px-4 py-2 block"
                      : "hover:text-white hover:bg-primary rounded-md px-4 py-2 block transition-all ease-in-out"
                  }
                  onClick={toggleMenu} 
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default SideMenu;
