import React from 'react';

type ButtonProps = {
  type:  "submit" | "button" | "reset";
  title: string;
  color: string;
}
const Button = ({ type, title, color }: ButtonProps) => {
  return (
    <button type={type} className={`text-white font-bold py-4 px-4 rounded-full transition-all opacity-85 hover:opacity-100 ${color}`}> {title} </button>
  );

}

export default Button;