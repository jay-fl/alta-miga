import React from "react";
import { useState } from "react";
{
  /** Icons */
}
import {
  RiHome6Line,
  RiMenu3Fill,
  RiCloseLine,
  RiGroupLine,
  RiMapPin2Line,
  RiProductHuntLine,
} from "react-icons/ri";

import { NavLink } from "react-router-dom";

const Sidebar = ({toggleTabs, showTabs}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <div
      className={`fixed top-0 w-80 h-full  overflow-y-hidden border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all duration-150 lg:left-0 z-50 ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        {/** Logo */}
        <div className="w-28 h-28 mb-10">
          <img
            className="w-full h-full object-cover rounded-full"
            src="altamiga.png"
            alt=""
          />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              onClick={showTabs ? toggleTabs : "" }
            >
              <RiHome6Line />
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className="text-gray-300  flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              onClick={showTabs ? toggleTabs : ""}
            >
              <RiGroupLine />
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className='text-gray-300  flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors'
              onClick={toggleTabs}
            >
              <RiProductHuntLine />
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className="text-gray-300  flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
              onClick={showTabs ? toggleTabs : "" }
            >
              <RiMapPin2Line />
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-gray-300 text-2xl font-bold tracking-[5px] flex items-center justify-start uppercase">
          Alta Miga
        </h1>
      </div>
      {/** Btn Menu Movil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden bg-blue-600 text-white fixed bottom-6 right-6 p-2 text-lg rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </div>
  );
};

export default Sidebar;
