import React from "react";

interface PropsType {
  children: React.ReactNode | React.ReactNode[];
}

const SidebarHeader: React.FC<PropsType> = ({ children }) => {
  return (
    <div className="flex items-center justify-between bg-[#18181b] px-3 py-1">
      {children}
    </div>
  );
};

export default SidebarHeader;
