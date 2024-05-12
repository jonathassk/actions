"use client";

import React, { useEffect } from 'react';
import { Roboto } from 'next/font/google';
import SearchBar from './components/SearchBar';
import MostSearchCIties from './components/MostSearchedCIties';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-12 ">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-xs lg:flex flex-col my-20">
        <p className={`${roboto.className} font-bold text-5xl text-gray-800 text-center my-10`}>Vamos iniciar nossa JORNADA?</p>
        <SearchBar />
        <MostSearchCIties />
     </div>
    </div>
  );
}
