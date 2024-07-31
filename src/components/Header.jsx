import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const user = {
  name: "Jiwon Kim",
  email: "ijhni043@gmail.com",
  imageUrl: "/src/assets/face-smile.svg",
};
const skill = [
  { name: "Tailwind CSS" },
  { name: "Figma" },
  { name: "GitHub" },
  { name: "React" },
  { name: "Photoshop" },
  { name: "InDesign" },
  { name: "Illustrator" },
];
const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "Editorial", href: "editorial", current: false },
  { name: "Brand", href: "brand", current: false },
  { name: "Graphic", href: "graphic", current: false },
  { name: "Mobile", href: "mobile", current: false },
];
const userNavigation = [{ name: "My Profile" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        <Disclosure
          as="nav"
          className={`transition-colors duration-300 ${
            scrolled ? "bg-white shadow-sm" : "bg-white"
          } fixed top-0 w-full z-10`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className={classNames(
                          item.current
                            ? "text-stone-700 hover:font-bold"
                            : "text-stone-500 hover:text-stone-400 hover:font-semibold",
                          "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-stone-500 hover:text-stone-400 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                  </button>

                  {/* 상단 프로필 드롭다운 메뉴 */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-stone-500 text-sm">
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="h-9 w-9 rounded-full p-1 bg-white"
                        />
                        <span className="flex absolute h-2 w-2 mt-5 ml-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-80"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-200"></span>
                        </span>
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <div className="cursor-default block px-4 py-2 text-sm text-stone-500">
                            {item.name}
                            <div className="mt-1 text-sm py-1 leading-none text-stone-700">
                              {user.name}
                            </div>
                            <div className="text-sm font-semibold leading-none text-stone-600">
                              {user.email}
                            </div>
                            <div className="mt-4 text-sm font-semibold leading-none text-stone-600">
                              {skill.map((item) => (
                                <button
                                  key={item.name}
                                  className="cursor-default hover:font-normal rounded-full border border-yellow-700/20 px-2 py-1 text-sx m-1 text-stone-600 font-thin"
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* 모바일 메뉴 버튼 -> X */}
                <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-stone-500 hover:text-stone-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>
          {/* 모바일 메뉴 panel */}
          <DisclosurePanel className="bg-white md:hidden fixed inset-0 z-50 mt-20">
            <div className="space-y-1 px-4 pb-6 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-stone-700"
                      : "text-stone-500 hover:text-stone-400 hover:font-semibold",
                    "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-stone-400 pb-3 pt-7">
              <div className="flex items-center px-6">
                <div className="flex-shrink-0">
                  <img alt="" src={user.imageUrl} className="h-9 w-9" />
                  <span className="flex absolute h-2 w-2 -mt-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-200"></span>
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-sm py-1 leading-none text-stone-700">
                    {user.name}
                  </div>
                  <div className="text-sm font-semibold leading-none text-stone-600">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full p-1 text-stone-500 hover:text-stone-400 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                </button>
              </div>
              {/* 모바일 메뉴 프로필 */}
              <div className="mt-3 space-y-1 px-3">
                {userNavigation.map((item) => (
                  <p
                    key={item.name}
                    href={item.href}
                    className="cursor-default block px-4 py-1 text-sm font-medium text-stone-500 hover:text-stone-400 hover:font-semibold"
                  >
                    {item.name}
                  </p>
                ))}
                <div className="mt-4 ml-2">
                  <p className="text-sm ml-3 mt-2 text-stone-600 font-thin">
                    available skills:
                  </p>
                  {skill.map((item) => (
                    <button
                      key={item.name}
                      className="cursor-default hover:font-normal rounded-full border border-yellow-700/20 px-4 py-1 text-sm m-1 text-stone-600 font-thin"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}
