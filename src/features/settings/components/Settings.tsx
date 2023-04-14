import React from "react";
import SidebarContainer from "../../../components/SidebarContainer/SidebarContainer";
import SidebarContent from "../../../components/SidebarContainer/SidebarContent";
import SidebarHeader from "../../../components/SidebarContainer/SidebarHeader";

const Settings = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <span className="font-bold">Settings</span>
      </SidebarHeader>
      <SidebarContent>settings...</SidebarContent>
    </SidebarContainer>
  );
};

export default Settings;
