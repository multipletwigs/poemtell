import React from "react";

interface PoemItemProps {
  title: string;
  description: string;
  generatedDate: string | Date;
}

const PoemItem = () => {
  return (
    <div className="bg-white px-3 py-5 border-cyan-700 border">
      <div className="text-2xl font-bold">Poem about trash cans</div>
      <div>Description</div>
    </div>
  );
};

export default PoemItem;
