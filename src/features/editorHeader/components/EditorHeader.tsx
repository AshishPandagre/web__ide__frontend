import { BsSoundwave } from "react-icons/bs";
import EditorShare from "./EditorShare";
import EditorStatus from "./EditorStatus";

const EditorHeader = () => {
  return (
    <div className="sticky flex items-center justify-between border border-[#252528] bg-[#191919] px-8 py-1 text-white">
      <div className="flex items-center gap-8">
        <BsSoundwave fill="white" size={30} />
        <EditorStatus />
      </div>
      <div>
        <span className="text-lg">My playground</span>
      </div>
      <EditorShare />
    </div>
  );
};

export default EditorHeader;
