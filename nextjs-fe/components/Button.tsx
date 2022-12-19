import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => any;
  btnColor?: string;
}

const Button = (props: ButtonProps) => {
  const btnColor = props.btnColor || "bg-slate-600";

  return (
    <button
      className={`h-fit rounded-lg ${btnColor} px-5 py-2 font-bold text-white outline-2 outline-slate-100 hover:outline`}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default Button;
