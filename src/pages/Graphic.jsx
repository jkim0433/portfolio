import React from "react";
import { Element, Link } from "react-scroll";
import graphic1 from "../img/Graphic1.png";
import graphic2 from "../img/Graphic2.png";

const Graphic = () => {
  return (
    <Element name="graphic" className="max-w-4xl mx-auto max-h-screen pt-20">
      <div className="w-full h-screen p-4">
        <Link
          to="graphic"
          smooth={true}
          duration={500}
          className="ml-10 font-semibold text-lg text-stone-600 hover:font-bold cursor-pointer"
        >
          <span aria-hidden="true" className="absolute inset-0" />
          Graphic Design
        </Link>
        <img
          src={graphic1}
          alt="Editorial Background"
          className="w-full pt-20 p-10 bg-cover"
        />
        <img
          src={graphic2}
          alt="Editorial Background"
          className="w-full bg-cover"
        />
        <div className="pt-10 text-right bg-white">
          <Link
            to="mobile"
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

export default Graphic;
