import Button from "@/components/Button";
import { useState } from "react";
import { Poem } from "@prisma/client";
import { baseUrl } from "@/config";
import PoemDialogForm from "./PoemDialogForm";

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

const addPoem = async (poemParams: PoemType) => {
  const res = await fetch(`${baseUrl}/api/poem?action=save`, {
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
      <PoemDialogForm poemState={[poem, setPoem]}/>
      <div className="text-2xl text-white font-bold mb-4">
        <span className="text-teal-400">poem</span>tell says
      </div>
      <p className="text-white max-h-96 overflow-y-auto whitespace-pre-line mb-10">
        {poem.content.trim()}
      </p>
      <Button
        onClick={() => {
          setPoem(() => ({ ...poem, content: "Generating text..." }));
          fetchNewPoem(poem).then((newPoem) => {
            const text = newPoem.result.choices[0].text.replace(
              /\\n\\n/g,
              "\n",
            );
            setPoem(() => ({ ...poem, content: text }));
          });
        }}
      >
        New Poem
      </Button>
      <div className="inline ml-1">
        <Button btnColor="bg-blue-400" onClick={() => {
          addPoem(poem).then(() => {
            setPoem(() => ({ ...poem, content: "Saved Poem!" }));
          });
        }}>
          Save Poem
        </Button>
      </div>
    </>
  );
};
