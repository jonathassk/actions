import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/app/constants";

const Navbar = () => {
  return (
    <nav
      className="cursor-pointer flex justify-between max-container padding-container fixed w-full z-30 py-5 bg-emerald-700 drop-shadow-md">
      <Link href="/" className="mx-5">
        <Image src="/logo.png" alt="Logo" width={30} height={30}/>
      </Link>
      <ul className="hidden h-full gap-12 md:flex mx-5">
        {NAV_LINKS.map((link, index) => (
          <Link href={link.href} key={index}
                className="regular-16 text-white flex justify-center cursor-pointer transition-all hover:font-bold "> {link.label} </Link>
        ))}
      </ul>

      <div className="cursor-pointer inline-block md:hidden mx-5 my-1.5">
        <input type="checkbox" id="nav-toggle" name="nav-toggle" className="peer hidden"/>
        <label htmlFor="nav-toggle" className="peer-checked:nav-toggle ">
          <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"></div>
          <div aria-hidden="true" className="m-auto mt-1 h-0.5 w-6 rounded bg-white transition duration-300"></div>
          <div aria-hidden="true" className="m-auto mt-1 h-0.5 w-6 rounded bg-white transition duration-300"></div>
        </label>

        <div
          className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] transition duration-300 h-svh">
          <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row bg-green-400">
            <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 bg-green-400 w-full absolute">
              <li>
                <a href="#"
                   className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-cyan-100">
                  <span className="relative text-cyan-800">Home</span>
                </a>
              </li>
              <li>
                <a href="#"
                   className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-cyan-800">Services</span>
                </a>
              </li>
              <li>
                <a href="#"
                   className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-cyan-800">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#"
                   className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                  <span className="relative group-hover:text-cyan-800">About us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
);
}

export default Navbar;