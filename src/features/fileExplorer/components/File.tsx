import path from "path";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IconType } from "react-icons/lib";

type FileProps = {
  name: string;
  icon?: IconType;
  id: string;
  parent: string;
  padding: number;
};

const File: React.FC<FileProps> = ({ name, icon, id, parent, padding }) => {
  return (
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
