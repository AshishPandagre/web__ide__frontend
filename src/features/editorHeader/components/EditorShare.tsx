import { AiOutlineShareAlt } from "react-icons/ai";

const EditorShare = () => {
  return (
    <button
      onClick={console.log}
      className="my-1 flex items-center gap-2 rounded-sm bg-[#242426] py-1 px-4 text-sm text-white ring-1 ring-gray-600 hover:bg-opacity-0"
    >
      <AiOutlineShareAlt size={22} />
      <span className="text-lg">Share</span>
    </button>
  );
};

export default EditorShare;
