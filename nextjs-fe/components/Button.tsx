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
      className="h-[fit-content] rounded-lg bg-slate-600 px-8 py-2 font-bold text-white outline-2 outline-slate-100 hover:outline"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default Button;
