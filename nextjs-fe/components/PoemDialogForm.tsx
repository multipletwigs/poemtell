import React from "react";
import { PoemType } from "./PoemDialogContent";

interface AddPoemProps {
  poemState: [PoemType, React.Dispatch<React.SetStateAction<PoemType>>];
}

const PoemDialogForm = (props: AddPoemProps) => {
  const [poem, setPoem] = props.poemState;
  return (
    <>
      <form className="mt-5">
        <label htmlFor="title" className="text-md text-white">
          Give your poem a title
        </label>
        <input
          type="text"
          placeholder="e.g. A happy poem."
          name="title"
          id="title"
          value={poem.title}
          onChange={(e) => setPoem(() => ({ ...poem, title: e.target.value }))}
          className="block w-full rounded-lg bg-slate-800 px-4 py-2 text-white outline-1 outline-slate-100 hover:outline focus:outline-1 focus:outline mt-2 mb-5"
        />
        <label htmlFor="AIBehavior" className="text-md text-white">
          How do you want the AI to behave?
        </label>
        <input
          type="text"
          placeholder="e.g. Happy, Sad, Angry, etc."
          name="AIBehavior"
          id="AIBehavior"
          value={poem.AIBehavior}
          onChange={(e) =>
            setPoem(() => ({ ...poem, AIBehavior: e.target.value }))
          }
          className="block w-full rounded-lg bg-slate-800 px-4 py-2 text-white outline-1 outline-slate-100 hover:outline focus:outline-1 focus:outline mt-2 mb-5"
        />
        <label htmlFor="poem" className="text-md text-white">
          Give the AI something work with.
        </label>
        <input
          name="poem"
          type="text"
          placeholder="e.g. Love and tic-tacs"
          id="poem"
          value={poem.prompt}
          onChange={(e) => setPoem(() => ({ ...poem, prompt: e.target.value }))}
          className="block w-full rounded-lg bg-slate-800 px-4 py-2 text-white outline-1 outline-slate-100 hover:outline focus:outline-1 focus:outline mt-2 mb-10"
        />
      </form>
    </>
  );
};

export default PoemDialogForm;
