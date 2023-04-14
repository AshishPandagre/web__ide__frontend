import React from "react";
import EditorHeader from "../features/editorHeader/components/EditorHeader";
import ActivityBar from "../components/ActivityBar/ActivityBar";

const Editor = () => {
  return (
    <div className="bg-[#131313] h-screen flex flex-col overflow-hidden text-white">
      <EditorHeader />
      <div className="h-full">
        <ActivityBar />
      </div>
    </div>
  );
};

export default Editor;
