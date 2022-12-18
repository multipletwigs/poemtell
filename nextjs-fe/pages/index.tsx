import Button from "@/components/atoms/Button";
import Poemtell from "@/components/Poemtell";
import PoemItem from "@/components/molecules/PoemItem";
import CenterContainer from "@/layouts/CenterContainer";
import { useState } from "react";
import PoemDialog from "@/components/PoemDialog";

export default function Home() {
  const [poem, setPoem] = useState<any>();
  const [addPoemIsOpen, setAddPoemOpen] = useState(false);

  return (
    <CenterContainer
      siteMetaData={{
        title: "Pod Presentation | Open AI API",
        description: "Manage your Poems",
      }}
    >
      <header className="flex justify-between sm:items-center flex-col sm:flex-row mb-10">
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
        testings
      </PoemDialog>
      <PoemItem title={""} description={""} generatedDate={""} />
    </CenterContainer>
  );
}
