import EditorHeader from "../features/editorHeader/components/EditorHeader";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import EditorComponent from "../features/editor/components/EditorComponent";
import Preview from "../features/preview/components/Preview";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

const Editor = () => {
  return (
    <div className="flex h-screen select-none flex-col overflow-hidden bg-[#131313] text-white">
      <EditorHeader />
      <ReflexContainer className="flex h-full" orientation="vertical">
        <ReflexElement flex={0.2} minSize={48} className="flex min-w-0">
          <ActivityBar />
        </ReflexElement>

        <ReflexSplitter
          className="w-[3px] cursor-col-resize bg-[#363636]"
          propagate={true}
        />

        <ReflexElement className="min-w-0">
          <EditorComponent />
        </ReflexElement>

        <ReflexSplitter
          className="w-[3px] cursor-col-resize bg-[#363636]"
          propagate={true}
        />

        <ReflexElement flex={0.3} className="min-w-0">
          <Preview />
        </ReflexElement>
      </ReflexContainer>
    </div>
  );
};

export default Editor;
