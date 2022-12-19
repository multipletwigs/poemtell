import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";
import { useRouter } from "next/router";

interface DialogProps {
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
  setOpen: [boolean, Dispatch<SetStateAction<boolean>>];
}

const PoemDialog = ({ children: poem, ...props }: DialogProps) => {
  const [isOpen, setIsOpen] = props.setOpen;
  const router = useRouter();
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
      <div className="fixed inset-0 mx-auto flex items-center justify-center overflow-y-auto">
        <Dialog.Panel className="rounded-xl bg-slate-700 px-8 py-5 drop-shadow-2xl w-3/4 lg:w-1/3">
          <div className="flex items-center justify-between">
            <div>
              <Dialog.Title className="text-2xl font-bold text-white">
                {props.title}
              </Dialog.Title>
              <Dialog.Description className="text-lg text-slate-300">
                {props.description}
              </Dialog.Description>
            </div>
            <Button
              btnColor="bg-rose-400/70"
              onClick={() => {
                setIsOpen(false);
                router.reload();
              }}
            >
              X
            </Button>
          </div>
          {poem}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PoemDialog;
