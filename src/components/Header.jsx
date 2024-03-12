import React from "react";
import { useState } from "react";
/** Icons */
import {
  RiFacebookBoxFill,
  RiWhatsappFill,
  RiInstagramFill,
} from "react-icons/ri";
import Sidebar from "./Sidebar";
/** React Scroll */
import { Link } from "react-scroll";

const Header = () => {
  const [showTabs, setShowTabs] = useState(false);

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  //console.log(showTabs);
  return (
    <>
      <Sidebar toggleTabs={toggleTabs} showTabs={showTabs} />
      <div className="fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center gap-6 justify-between  p-8 bg-[#141414] z-40">
        <nav
          className={`flex items-center gap-4 order-1 md:order-none ${
            showTabs ? "visible" : "invisible"
          }`}
        >
          <Link
            activeClass="active bg-[#2B6771] text-white"
            to="sanguches"
            spy={true}
            smooth={"easeOutQuad"}
            offset={-100}
            duration={900}
            className="text-gray-400 hover:cursor-pointer py-1 px-4 rounded-xl"
          >
            Sánguches
          </Link>
          <Link
            activeClass="active bg-[#2B6771] text-white"
            to="pizzas"
            spy={true}
            smooth={"easeOutQuad"}
            offset={-100}
            duration={900}
            className="text-gray-400 hover:cursor-pointer py-1 px-4 rounded-xl"
          >
            Pizzas
          </Link>
          <Link
            activeClass="active bg-[#2B6771] text-white"
            to="tortas"
            spy={true}
            smooth={"easeOutQuad"}
            offset={-100}
            duration={900}
            className="text-gray-400 hover:cursor-pointer py-1 px-4 rounded-xl"
          >
            Tortas
          </Link>
        </nav>
        <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100076713964262"
            target="_blank"
          >
            <RiFacebookBoxFill className="w-6 h-6  text-gray-500" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <RiInstagramFill className="w-6 h-6  text-gray-500" />
          </a>
          <a href="https://web.whatsapp.com" target="_blank">
            <RiWhatsappFill className="w-6 h-6  text-gray-500" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
