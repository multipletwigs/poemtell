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
      className="bg-indigo-400 text-white px-5 py-2 rounded-lg font-roboto-slab"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default Button;
