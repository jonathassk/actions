"use client";

import React, { useEffect } from 'react';
import { Roboto } from 'next/font/google';
import SearchBar from './components/SearchBar';
import { nonLoggedDataImp } from './store/NonLoggerData';


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const { language, setLanguage } = nonLoggedDataImp.getState();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) console.log('Scrolling', window.scrollY)
      console.log(language)
      setLanguage('PT')
    };
    
    window.addEventListener('scroll', handleScroll);
    window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 ">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-xs lg:flex flex-col my-50">
        <p className={`${roboto.className} font-bold text-5xl text-gray-800 text-center my-36`}>Vamos iniciar nossa JORNADA?</p>
        <SearchBar />
      </div>
    </main>
  );
}
