import React from "react";
import { Element, Link } from "react-scroll";
import brandImage from "../img/Brand1.png";
import brandImage2 from "../img/Brand2.png";

const Brand = () => {
  return (
    <Element name="brand" className="max-w-4xl mx-auto max-h-screen pt-20">
      <div className="w-full h-full pt-20 p-4">
        <Link
          to="brand"
          smooth={true}
          duration={500}
          className="ml-10 font-semibold text-lg text-stone-600 hover:font-bold cursor-pointer"
        >
          <span aria-hidden="true" className="absolute inset-0" />
          Brand Design
        </Link>
        <img
          src={brandImage}
          alt="Editorial Background"
          className="w-full pt-20 p-10 bg-cover"
        />
        <img
          src={brandImage2}
          alt="Editorial Background"
          className="w-full bg-cover"
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

export default Brand;
