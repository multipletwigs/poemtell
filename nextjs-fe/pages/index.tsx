import Button from "@/components/atoms/Button";
import Poemtell from "@/components/Poemtell";
import PoemItem from "@/components/molecules/PoemItem";
import CenterContainer from "@/layouts/CenterContainer";
import { useState } from "react";

export default function Home() {
  const [poem, setPoem] = useState<any>();

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
          onClick={function () {
            alert("Add Poem");
          }}
        >
          Add Poem
        </Button>
      </header>
      <PoemItem />
    </CenterContainer>
  );
}
