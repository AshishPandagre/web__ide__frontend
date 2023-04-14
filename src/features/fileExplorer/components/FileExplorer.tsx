import { VscCollapseAll, VscNewFile, VscNewFolder } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import SidebarHeader from "../../../components/SidebarContainer/SidebarHeader";
import SidebarContent from "../../../components/SidebarContainer/SidebarContent";
import SidebarContainer from "../../../components/SidebarContainer/SidebarContainer";

const FileExplorer = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <span className="font-bold">CODE</span>
        <div className="flex items-center gap-2">
          <VscNewFile size={18} className="cursor-pointer" />
          <VscNewFolder size={18} className="cursor-pointer" />
          <VscCollapseAll size={18} className="cursor-pointer" />
          <BsThreeDotsVertical size={18} className="cursor-pointer" />
        </div>
      </SidebarHeader>
      <SidebarContent>filesystem...</SidebarContent>
    </SidebarContainer>
  );
};

export default FileExplorer;
