import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import Button from "../../../components/Button/Button";

const EditorShare = () => {
  return (
    <Button
      onClick={console.log}
      className="border-2 border-gray-600 bg-[#242426] py-1 gap-2 rounded-md"
    >
      <AiOutlineShareAlt size={22} />
      <span className="text-lg">Share</span>
    </Button>
  );
};

export default EditorShare;
