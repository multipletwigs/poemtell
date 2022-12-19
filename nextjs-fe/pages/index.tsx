import Button from "@/components/Button";
import PoemItem from "@/components/PoemItem";
import CenterContainer from "@/layouts/CenterContainer";
import { useEffect, useState } from "react";
import PoemDialog from "@/components/PoemDialog";
import { Poem } from "@prisma/client";
import { baseUrl } from "@/config/index";


interface PoemType extends Pick<Poem, "title" | "content" | "AIBehavior" | "prompt"> {}

const GeneratePoemDialogContent = () => {
  const [poem, setPoem] = useState<PoemType>({
    title: "",
    content: "",
    AIBehavior: "",
    prompt: "",
  });

  return (
    <>
      <form>
        <label htmlFor="AIBehavior">AI Behavior</label>
        <textarea
          name="AIBehavior"
          id="AIBehavior"
          value={poem.AIBehavior}
          onChange={(e) =>
            setPoem(() => ({ ...poem, AIBehavior: e.target.value }))
          }
        />
        <label htmlFor="poem">Prompt</label>
        <textarea
          name="poem"
          id="poem"
          value={poem.prompt}
          onChange={(e) => setPoem(() => ({ ...poem, prompt: e.target.value }))}
        />
      </form>
      <button
        onClick={() => {
          console.log(poem);
        }}
      >
        Submit
      </button>
    </>
  );
};

const fetchPoems = async () => {
  const res = await fetch(`${baseUrl}/api/poem`, {
    method: "GET",
  });
  const poems = await res.json();
  return poems.result;
}


export default function Home() {
  const [addPoemIsOpen, setAddPoemOpen] = useState(false);
  const [poems, setPoems] = useState<any>([])

  useEffect(() => {
    fetchPoems().then(setPoems);
  }, []);

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
      </PoemDialog >
      {poems.length > 0 ? poems.map((poems: PoemType)=>{
        return <PoemItem key={poems.title} title={poems.title} description={poems.prompt} generatedDate={""}>
          <>Poem</>
        </PoemItem>
      }) : <div className="text-2xl font-bold text-white text-center">No poems found</div>}
    </CenterContainer>
  );
}
