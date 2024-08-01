import React from "react";
import { Element, Link } from "react-scroll";
import axtMagazin1 from "../img/AxtMagazin3.png";
import axtMagazin2 from "../img/AxtMagazin4.png";
import axtMagazin3 from "../img/AxtMagazin5.png";

const Editorial = () => {
  return (
    <Element name="editorial" className="max-w-4xl mx-auto h-full pt-20">
      <div className="w-full h-full p-4">
        <Link
          to="editorial"
          smooth={true}
          duration={500}
          className="ml-10 font-semibold text-lg text-stone-600 hover:font-bold cursor-pointer"
        >
          <span aria-hidden="true" className="absolute inset-0" />
          Editorial Design
        </Link>
        <img
          src={axtMagazin1}
          alt="Editorial Image"
          className="w-full pt-20 p-10 bg-cover"
        />
        <img
          src={axtMagazin2}
          alt="Editorial Image"
          className="w-full bg-cover"
        />
        <img
          src={axtMagazin3}
          alt="Editorial Image"
          className="w-full bg-cover mt-4"
        />
        <div className="pt-10 text-right bg-white">
          <Link
            to="brand"
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

export default Editorial;
