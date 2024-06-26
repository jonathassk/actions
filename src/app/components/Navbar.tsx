"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/app/constants/Index";
import Button from './Button';

const Navbar = () => {
  return (
    <nav
      className="fixed z-40 w-full border-b dark:border-gray-700 bg-white dark:bg-gray-800 md:bg-transparent py-2">
      <div className="container m-auto px-2 md:px-12 lg:px-7 bg-white dark:bg-gray-800">
        <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-1 gap-6 md:py-1 md:gap-0">
          <input type="checkbox" name="" id="toggleNav" className="peer hidden"/>
          <label htmlFor="toggleNav" role="overlaynav" className="fixed left-0 top-0 transition-all
                    md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0
                    peer-checked:opacity-75 peer-checked:block w-full h-screen
                    bg-gray-200 bg-opacity-75 dark:bg-darker dark:opacity-80"></label>
          <div className="">
            <Link href="/" className="">
              <Image src="/logo.png" alt="Logo" width={30} height={30}/>
            </Link>
          </div>

          <div id="navlinks"
               className="fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white dark:bg-gray-800 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent duration-700 md:w-max">
            <div className="z-20 flex gap-8 flex-col md:flex-row md:items-center w-full">
              <ul className="lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row">
                {NAV_LINKS.map((link, index) => (
                  <li className="max-w-max" key={index}>
                    <a href="#" className="block md:px-3">
                      <div
                        className="relative text-cyan-800 dark:text-white
                                                    before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full">
                        <span>{link.label}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex sm:hidden pt-4 w-full">
                <Button type={"button"} title={"login"} color={"bg-black"} />

              </div>
            </div>
          </div>
          <div className="block-endnav w-max flex items-center gap-4">
<div className="hidden md:flex gap-4">
              <Button type={"button"} title={"login"} color={"bg-black"} colorDarkMode={"bg-white"}/>
            </div>
            <div className="flex items-center md:hidden max-h-10">
              <label role="button" htmlFor="toggleNav" aria-label="humburger" id="hamburger"
                     className="relative -mr-6">
                <div role="hidden" id="line"
                     className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"></div>
                <div role="hidden" id="line2"
                     className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300">
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;