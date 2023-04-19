import React from "react";
import EditorHeader from "../features/editorHeader/components/EditorHeader";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import FileExplorer from "../features/fileExplorer/components/FileExplorer";
import EditorComponent from "../features/editor/components/EditorComponent";

const Editor = () => {
  return (
    <div className="flex h-screen flex-col overflow-y-hidden bg-[#131313] text-white">
      <EditorHeader />
      <div className="flex h-full">
        <ActivityBar />
        <EditorComponent />
      </div>
    </div>
  );
};

export default Editor;
