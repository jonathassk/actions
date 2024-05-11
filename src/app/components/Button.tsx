import React from 'react';

type ButtonProps = {
  type:  "submit" | "button" | "reset";
  title: string;
  color: string;
  colorDarkMode?: string;
}
const Button = ({ type, title, color, colorDarkMode }: ButtonProps) => {
  return (
    <button type={type} className={`text-white dark:text-white font-bold p-2 rounded-md transition-all opacity-70 hover:opacity-100 ${color} dark:${colorDarkMode}`}> {title} </button>
  );

}

export default Button;