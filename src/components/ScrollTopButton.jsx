import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 bg-stone-500 hover:bg-stone-400 text-white py-3 px-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-violet-500 stroke-1 stroke-stone-50"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"> </path>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
