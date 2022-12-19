import Button from "@/components/Button";
import { useState } from "react";
import { Poem } from "@prisma/client";
import { baseUrl } from "@/config";

export interface PoemType
  extends Pick<Poem, "title" | "content" | "AIBehavior" | "prompt"> {}

const fetchNewPoem = async (poemParams: PoemType) => {
  const res = await fetch(`${baseUrl}/api/poem?action=generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(poemParams),
  });
  const newPoem = await res.json();
  return newPoem;
};

export const GeneratePoemDialogContent = () => {
  const [poem, setPoem] = useState<PoemType>({
    title: "",
    content: "",
    AIBehavior: "",
    prompt: "",
  });

  return (
    <>
      <form className="mt-5">
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
      <div className="text-2xl text-white font-bold mb-4"><span className="text-teal-400">poem</span>tell says</div>
      <p className="text-white max-h-96 overflow-y-scroll whitespace-pre-line mb-10">{poem.content.trim()}</p>
      <Button
        onClick={() => {
          setPoem(() => ({ ...poem, content: "Generating text..." }));
          fetchNewPoem(poem).then((newPoem) => {
            const text = newPoem.result.choices[0].text.replace(/\\n\\n/g, "\n");
            setPoem(() => ({ ...poem, content: text }));
          });
        }}
      >
        Generate Poem
      </Button>
    </>
  );
};
