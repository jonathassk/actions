import React from 'react';
import Button from "@/app/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Welcome to your new projects!</p>
        <Button type={"button"} title={"botao teste"} color={"bg-green-900"}/>
        <Button type={"submit"} title={"botao teste"} color={"bg-blue-900"}/>
        <svg className="animate-bounce w-6 h-6 stroke-cyan-500" />
      </div>
    </main>
  );
}
