import React from "react";
import { BsCheck2All } from "react-icons/bs";

const EditorStatus = () => {
  return (
    <div className="flex items-center gap-2">
      <BsCheck2All fill="#78716C" size={25} />
      <span className="text-[#78716C] text-lg">Saved</span>
    </div>
  );
};

export default EditorStatus;
