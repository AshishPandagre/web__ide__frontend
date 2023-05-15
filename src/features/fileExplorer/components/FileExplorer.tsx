import { VscCollapseAll, VscNewFile, VscNewFolder } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import SidebarHeader from "../../../components/SidebarContainer/SidebarHeader";
import SidebarContent from "../../../components/SidebarContainer/SidebarContent";
import SidebarContainer from "../../../components/SidebarContainer/SidebarContainer";
import FileTree from "./FileTree";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { openFolder } from "../../../redux/editor/fileTreeSlice";

const FileExplorer = () => {
  const dispatch = useAppDispatch();
  const folders = Object.keys(useAppSelector((state) => state.fileTree.folder_children));

  const collapseAll = () => {
    for (let folder_id of folders) {
      dispatch(openFolder({ id: folder_id, open: false }));
    }
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <span className="font-bold">CODE</span>
        <div className="flex items-center gap-2">
          <VscNewFile size={18} className="cursor-pointer" />
          <VscNewFolder size={18} className="cursor-pointer" />
          <VscCollapseAll size={18} className="cursor-pointer" onClick={collapseAll} />
          <BsThreeDotsVertical size={18} className="cursor-pointer" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <FileTree />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default FileExplorer;
