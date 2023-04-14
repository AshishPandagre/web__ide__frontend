import React from "react";
import SidebarContainer from "../../../components/SidebarContainer/SidebarContainer";
import SidebarHeader from "../../../components/SidebarContainer/SidebarHeader";
import SidebarContent from "../../../components/SidebarContainer/SidebarContent";

const Search = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <span className="font-bold">Search</span>
      </SidebarHeader>
      <SidebarContent>search...</SidebarContent>
    </SidebarContainer>
  );
};

export default Search;
