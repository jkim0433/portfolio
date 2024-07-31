import { Element, Link } from "react-scroll";

const Home = () => {
  return (
    <Element
      name="home"
      className="min-h-screen mb-20 relative isolate px-6 pt-14 lg:px-8"
    >
      {/* <div aria-hidden="true">
        <div />
      </div> */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="pt-20 hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-stone-600 ring-1 ring-yellow-700/20 hover:ring-yellow-700/20">
            Check Out My Portfolio.{" "}
            <Link
              to="editorial"
              smooth={true}
              duration={500}
              className="font-semibold text-stone-500 hover:font-bold cursor-pointer"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              View More <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-5xl">
            Dedicated to Balanced Design
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Balance in design goes beyond visual harmony; <br /> it enhances
            user experience. My approach ensures that every element works
            together seamlessly, creating a design that is both beautiful and
            functional. From initial sketches to final touches, achieving and
            maintaining balance is central to my process!{" "}
          </p>
          <div className="mt-10 items-center justify-center gap-x-6 flex">
            <Link
              to="editorial"
              smooth={true}
              duration={500}
              className="animate-bounce p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-yellow-400/70 rounded-full flex"
            >
              <svg
                className="w-6 h-6 text-violet-500 stroke-1 stroke-yellow-500 cursor-pointer"
                fill="none"
                aria-hidden="true"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"> </path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div aria-hidden="true"></div>
    </Element>
  );
};

export default Home;
