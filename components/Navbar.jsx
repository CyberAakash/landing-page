"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  Bars2Icon,
  Bars3CenterLeftIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import config from "@/config/index.json";

const Navbar = () => {
  const { navbar } = config;

  // ThemeSwitcher
  const [mounted, setMounted] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [open, setOpen] = useState(true);

  const { theme, setTheme } = useTheme();

  const checkScrollPosition = () => {
    if (window.scrollY > 40) {
      setWhiteBackground(true);
    } else {
      setWhiteBackground(false);
    }
  };

  const checkScreenWidth = () => {
    if (window.innerWidth >= 100) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to check screen size when the component mounts
    checkScreenWidth();

    // Add event listener to check screen size whenever the window is resized
    window.addEventListener("resize", checkScreenWidth);

    // Add event listener to check the scroll position when the component mounts
    checkScrollPosition();

    // Add event listener to check the scroll position whenever the user scrolls
    window.addEventListener("scroll", checkScrollPosition);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenWidth);

      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav
        className={twMerge(
          "fixed z-[1000] backdrop-blur-xl top-0 left-0 overflow-hidden flex flex-col justify-between items-center w-screen h-20 p-2 sm:px-10 lg:px-20 bg-transparent text-f1 dark:text-white",
          whiteBackground
            ? "bg-zinc-100 dark:bg-zinc-800 shadow-lg"
            : "bg-transparent shadow-none",
          open ? "h-fit" : "h-20"
        )}
      >
        <div className="bg-transparent h-16 w-full flex items-center justify-between relative">
          <Link
            href="/"
            alt=""
            className="text-lg font-black uppercase flex items-center justify-center gap-2 "
          >
            {/* navbar.name */}
            <Image
              src={navbar.logo}
              width={40}
              height={40}
              alt="sma"
              className="scale-75 sm:scale-90 lg:scale-100 dark:invert"
            />
            {navbar.name}
          </Link>
          <div className="flex items-center justify-center gap-8">
            <Link href="" className="hidden md:block font-thin font-sans hover:underline underline-offset-4 transition-transform delay-75 duration-200">Home</Link>
            <Link href="" className="hidden md:block font-thin font-sans hover:underline underline-offset-4 transition-transform delay-75 duration-200">About Us</Link>
            <Link href="" className="hidden md:block font-thin font-sans hover:underline underline-offset-4 transition-transform delay-75 duration-200">Products</Link>
            <Link href="" className="hidden md:block font-thin font-sans hover:underline underline-offset-4 transition-transform delay-75 duration-200">Contact</Link>
            <button
              //   style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              className={`vertical-text z-[100] sticky left-5 top-20 rounded-xl hover:scale-110 active:scale-100 duration-200 dark:text-white text-d1`}
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                // console.log(appState);
              }}
            >
              {theme === "light" ? (
                <MoonIcon className="h-6 w-6 text-indigo-500" />
              ) : (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              )}
            </button>
            {open ? (
              <XMarkIcon
                onClick={() => {
                  setOpen(!open);
                }}
                className={twMerge(
                  "h-6 w-6 text-black dark:text-white sm:hidden cursor-pointer mr-4 transition-transform duration-[3000] ease-in-out delay-300"
                )}
              />
            ) : (
              <Bars2Icon
                onClick={() => {
                  setOpen(!open);
                }}
                className={twMerge(
                  "h-6 w-6 text-black dark:text-white sm:hidden cursor-pointer mr-4 transition-transform duration-[3000] ease-in-out delay-300"
                )}
              />
            )}
          </div>
        </div>
        {open && (
          <>
            <motion.hr
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
              className="h-1 w-screen"
            ></motion.hr>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
              className={twMerge(
                "m-0 text-3xl font-normal transition-all ease-in-out duration-700 transform w-full pt-10 h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col gap-4 items-center justify-start right-0"
                // hideNav ? "top-0 pt-20" : "top-20"
              )}
            >
              <Link href="" className="w-full text-center p-2 mt-2">
                Home
              </Link>
              {/* <hr className="bg-f2 w-full" /> */}
              <Link href="" className="w-full text-center p-2">
                Products
              </Link>
              {/* <hr className="bg-f2 w-full" /> */}
              <Link href="" className="w-full text-center p-2">
                About Us
              </Link>
              {/* <hr className="bg-f2 w-full" /> */}
              <Link href="" className="w-full text-center p-2">
                Contact
              </Link>
              {/* <hr className="bg-f2 w-full" /> */}
            </motion.div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
