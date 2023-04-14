import React from "react";

interface PropsType {
  children: React.ReactNode | React.ReactNode[];
}

const SidebarContainer: React.FC<PropsType> = ({ children }) => {
  return (
    <div className="flex w-80 flex-col divide-y divide-[#2d2d31]">
      {children}
    </div>
  );
};

export default SidebarContainer;
