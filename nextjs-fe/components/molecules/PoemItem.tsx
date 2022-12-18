import React from "react";
import Button from "../atoms/Button";

interface PoemItemProps {
  title: string;
  description: string;
  generatedDate: string | Date;
}

const PoemItem = () => {
  return (
    <div className="bg-slate-700 px-6 py-5 border-slate-600 border-2 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div className="mb-4 sm:mb-0">
        <div className="text-2xl font-bold text-white">
          Poem about trash cans
        </div>
        <div className="text-slate-300">
          A short poem about life and how you shold cherish it
        </div>
      </div>
      <Button
        onClick={function () {
            alert("View Poem");;
        }}
      >
        View Poem
      </Button>
    </div>
  );
};

export default PoemItem;
