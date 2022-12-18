import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => any;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-slate-600 text-white font-bold px-8 rounded-lg h-[fit-content] py-2 hover:outline outline-2 outline-slate-100"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default Button;
