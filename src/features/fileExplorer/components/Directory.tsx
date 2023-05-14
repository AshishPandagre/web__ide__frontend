import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import File from "./File";
import Folder from "./Folder";
import useGetSortedFileFolder from "../hooks/useGetSortedFileFolder";

type DirectoryProps = {
  parent_id: string;
  padding: number;
};

const Directory: React.FC<DirectoryProps> = ({ parent_id, padding }) => {
  const folder_children = useAppSelector((state) => state.fileTree.folder_children)[parent_id];
  const elements = useAppSelector((state) => state.fileTree.elements);
  const activeElement = useAppSelector((state) => state.fileTree.activeElement);

  let children_obj = folder_children.map((c_id) => elements[c_id]);
  children_obj = useGetSortedFileFolder(children_obj);

  return (
    <>
      {children_obj.map((obj) => {
        if (obj.type == "file")
          return (
            <File
              obj={obj}
              parent={parent_id}
              key={obj.id}
              padding={padding + 7}
              isActive={activeElement == obj.id}
            />
          );
        else
          return (
            <Folder
              obj={obj}
              parent={parent_id}
              key={obj.id}
              padding={padding + 3}
              isActive={activeElement == obj.id}
            />
          );
      })}
    </>
  );
};

export default Directory;
