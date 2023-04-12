import React, { ReactNode, useState } from "react";

interface PropsType {
  children: ReactNode[];
  open: boolean;
  toggle: () => void;
}

const Dropdown: React.FC<PropsType> = ({ children, open, toggle }) => {
  return (
    <div
      className="flex items-center bg-[#292524] w-[400px] p-2 rounded-xl flex-col gap-4 hover:cursor-pointer"
      onClick={toggle}
    >
      {children[0]}
      {open && children[1]}
    </div>
  );
};

export default Dropdown;
