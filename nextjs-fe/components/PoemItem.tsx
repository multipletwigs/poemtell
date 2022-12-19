import React, { ReactNode, useState } from "react";
import Button from "./Button";
import PoemDialog from "./PoemDialog";
import { PoemType } from "./PoemDialogContent";

interface PoemItemProps {
  poem: PoemType;
  children: ReactNode; 
}

const PoemItem = (props: PoemItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-lg border-2 border-slate-600 bg-slate-700 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="mb-4 sm:mb-0">
        <div className="text-2xl font-bold text-white">
          {props.poem.title}
        </div>
        <div className="text-slate-300">
          {props.poem.prompt}
        </div>
      </div>
      <Button onClick={() => setIsOpen(true)}>View Poem</Button>
      <PoemDialog
        title={props.poem.title}
        description={props.poem.prompt}
        setOpen={[isOpen, setIsOpen]}
      >
        {props.children}
      </PoemDialog>
    </div>
  );
};

export default PoemItem;
