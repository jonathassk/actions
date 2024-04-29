import React from 'react';
import { Roboto } from 'next/font/google'
import Button from "@/app/components/Button";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-xs lg:flex justify-center">
        <p className={`${roboto.className} font-bold text-5xl text-gray-800 text-center`}>Vamos iniciar nossa JORNADA!!</p>
        <svg className="animate-bounce w-6 h-6 stroke-cyan-500" />
      </div>
    </main>
  );
}
