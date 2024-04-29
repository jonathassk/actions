import React from 'react';

type ButtonProps = {
  type:  "submit" | "button" | "reset";
  title: string;
  color: string;
}
const Button = ({ type, title, color }: ButtonProps) => {
  return (
    <button type={type} className={`text-white font-bold p-2 rounded-md transition-all opacity-70 hover:opacity-100 ${color}`}> {title} </button>
  );

}

export default Button;