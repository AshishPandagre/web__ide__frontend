import React from "react";
import EditorHeader from "../features/editorHeader/components/EditorHeader";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import FileExplorer from "../features/fileExplorer/components/FileExplorer";

const Editor = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#131313] text-white">
      <EditorHeader />
      <div className="flex h-full">
        <ActivityBar />
      </div>
    </div>
  );
};

export default Editor;
