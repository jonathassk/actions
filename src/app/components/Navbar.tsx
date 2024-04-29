import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/app/constants";
import Button from './Button';

const Navbar = () => {
  return (
    <nav
      className="cursor-pointer flex justify-between max-container padding-container fixed w-full z-30 py-5 drop-shadow-md items-center">
      <Link href="/" className="mx-5">
        <Image src="/logo.png" alt="Logo" width={30} height={30}/>
      </Link>
      <ul className="hidden h-full gap-12 md:flex mx-5">
        {NAV_LINKS.map((link, index) => (
          <Link href={link.href} key={index}
                className="regular-16 text-black flex justify-center font-bold cursor-pointer opacity-60 hover:opacity-100 "> {link.label} </Link>
        ))}
      </ul>
      <input type="text" value="aaa"/>
      <div className="hidden h-full gap-12 md:flex px-5">
        <Button title='LOGIN' color='bg-black' type='button'/>
      </div>

      <div className="cursor-pointer inline-block md:hidden mx-5 my-1.5">
        <input type="checkbox" id="nav-toggle" name="nav-toggle" className="peer hidden"/>
        <label htmlFor="nav-toggle" className="peer-checked:nav-toggle ">
          <div aria-hidden="true" className="m-auto h-0.5 w-6 rounded bg-black transition duration-300"></div>
          <div aria-hidden="true" className="m-auto mt-1 h-0.5 w-6 rounded bg-black transition duration-300"></div>
          <div aria-hidden="true" className="m-auto mt-1 h-0.5 w-6 rounded bg-black transition duration-300"></div>
        </label>

        <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(60%)] translate-x-[-100%] transition duration-300 h-svh">
          <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row bg-white">
            <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 w-full absolute">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-cyan-100">
                    <span className="relative text-cyan-800"> {link.label} </span>
                  </Link>
                </li>
              ))}
              <Button title='LOGIN' color='bg-black' type='button'/>
            </ul>

          </div>
        </div>
        <div className="peer-checked:bg-white fixed bg-black"></div>
      </div>
    </nav>
);
}

export default Navbar;