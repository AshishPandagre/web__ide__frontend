import React from "react";

interface PropsType {
  children: React.ReactNode | React.ReactNode[];
}

const SidebarContent: React.FC<PropsType> = ({ children }) => {
  return <div className="h-full px-3">{children}</div>;
};

export default SidebarContent;
