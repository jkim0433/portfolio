// src/pages/Mobile.jsx
import React from "react";
import { Element, Link } from "react-scroll";
import mobileImage from "../img/Mobile.png";
const Mobile = () => {
  return (
    <Element
      name="mobile"
      className="max-w-4xl w-full mx-auto bg-white h-full pt-20"
    >
      <div className="w-full mt-20 h-full pt-20 p-4">
        <Link
          to="mobile"
          smooth={true}
          duration={500}
          className="ml-10 font-semibold text-lg text-stone-600 hover:font-bold cursor-pointer"
        >
          <span aria-hidden="true" className="" />
          Mobile Design
        </Link>
        <img
          src={mobileImage}
          alt="Mobile Image"
          className="w-full pt-20 p-10 bg-cover bg-white"
        />
        <div className="pt-10 text-right bg-white">
          <Link
            to="graphic"
            smooth={true}
            duration={500}
            className="cursor-pointer font-semibold text-sm text-yellow-700/70 hover:font-bold cursor-pointer"
          >
            <span aria-hidden="true" className="absolute inset-0" />
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Mobile;
