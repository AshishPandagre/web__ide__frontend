import {
  ReflexContainer,
  ReflexElement,
  ReflexSplitter
} from "react-reflex";
import ActivityBar from "../components/ActivityBar/ActivityBar";
import EditorComponent from "../features/editor/components/EditorComponent";
import EditorHeader from "../features/editorHeader/components/EditorHeader";
import Preview from "../features/preview/components/Preview";
import useSidebar from "./hooks/useSidebar";

const Editor = () => {
  const {barSize, enableBar, openSidebar, toggleSidebar, onStopResize} = useSidebar()

  return (
    <div className="flex h-screen select-none flex-col overflow-hidden bg-[#131313] text-white">
      <EditorHeader />
      <ReflexContainer className="flex h-full" orientation="vertical">
        <ReflexElement
          flex={enableBar ? barSize : 0}
          minSize={48}
          className="flex min-w-0"
          onStopResize={onStopResize}
        >
          <ActivityBar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
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
