import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";

interface DialogProps {
  title: ReactNode;
  description: ReactNode;
  children: ReactNode; 
  setOpen: [boolean, Dispatch<SetStateAction<boolean>>];
}

const PoemDialog = (props: DialogProps) => {
  const [isOpen, setIsOpen] = props.setOpen;
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center w-3/4 lg:w-1/2 mx-auto">
        <Dialog.Panel className="bg-slate-700 px-5 py-10 rounded-xl drop-shadow-2xl">
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.Description>
            {props.description}
          </Dialog.Description>

          {props.children}

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PoemDialog;
