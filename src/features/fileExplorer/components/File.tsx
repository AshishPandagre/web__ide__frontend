import path from "path";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";

type FileProps = {
  padding: number;
  name: string;
  location: string;
};

const File: React.FC<FileProps> = ({ padding, name, location }) => {
  console.log(location);

  return (
    // single file
    <div
      className={`flex items-center gap-2 py-[3px] hover:bg-[#2a2d2e]`}
      style={{ paddingLeft: padding * 4 }}
    >
      <AiFillHtml5 size={18} />
      <span>{name}</span>
    </div>
  );
};
export default File;
