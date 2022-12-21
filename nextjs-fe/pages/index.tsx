import Button from "@/components/Button";
import PoemItem from "@/components/PoemItem";
import CenterContainer from "@/layouts/CenterContainer";
import { useEffect, useState } from "react";
import PoemDialog from "@/components/PoemDialog";
import {
  PoemType,
  GeneratePoemDialogContent,
} from "../components/PoemDialogContent";
import { baseUrl } from "@/config";

export const fetchPoems = async () => {
  const res = await fetch(`${baseUrl}/api/poem`, {
    method: "GET",
  });
  const poems = await res.json();
  return poems.result;
};

export default function Home() {
  const [addPoemIsOpen, setAddPoemOpen] = useState(false);
  const [poems, setPoems] = useState<PoemType[] | undefined>(undefined);

  setInterval(() => {
    fetchPoems().then(setPoems);
  }, 3000);

  return (
    <CenterContainer
      siteMetaData={{
        title: "Pod Presentation | Open AI API",
        description: "Manage your Poems",
      }}
    >
      <header className="mb-10 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="mb-5">
          <h1>Directory</h1>
          <p>Manage all your poems here!</p>
        </div>
        <Button
          onClick={() => {
            setAddPoemOpen(true);
          }}
        >
          Add Poem
        </Button>
      </header>
      <PoemDialog
        title={"Add Poem"}
        description={"Create a new Dialog"}
        setOpen={[addPoemIsOpen, setAddPoemOpen]}
      >
        <GeneratePoemDialogContent />
      </PoemDialog>
      <div className="flex flex-col gap-4">
        {poems ? (
          poems.length > 0 ? (
            poems.map((poems: PoemType) => {
              return (
                <PoemItem key={poems.title} poem={poems}>
                  <p className="text-white max-h-96 overflow-y-auto whitespace-pre-line mb-10 scrollbar">
                    {poems.content}
                  </p>
                </PoemItem>
              );
            })
          ) : (
            <div className="text-2xl font-bold text-white text-center">
              No poems found.
            </div>
          )
        ) : (
          <div className="text-2xl font-bold text-white text-center">
            Fetching poems...
          </div>
        )}
      </div>
    </CenterContainer>
  );
}
