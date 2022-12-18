import Button from "@/components/atoms/Button";
import Poemtell from "@/components/atoms/Poemtell";
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
    </CenterContainer>
  );
}
