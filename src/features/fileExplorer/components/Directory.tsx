import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import File from "./File";
import Folder from "./Folder";
import useGetSortedFileFolder from "../hooks/useGetSortedFileFolder";
import FileFolderCreateInput from "./FileFolderCreateInput";

type DirectoryProps = {
  parent_id: string;
  padding: number;
};

const Directory: React.FC<DirectoryProps> = ({ parent_id, padding }) => {
  const folder_children = useAppSelector(
    (state) => state.fileTree.folder_children
  )[parent_id];
  const elements = useAppSelector((state) => state.fileTree.elements);
  const activeElement = useAppSelector((state) => state.fileTree.activeElement);
  const elementCreation = useAppSelector(
    (state) => state.fileTree.elementCreation
  );

  let children_obj = folder_children.map((c_id) => elements[c_id]);
  let children = useGetSortedFileFolder(children_obj);

  return (
    <>
      {elementCreation &&
        elementCreation.parent == parent_id &&
        elementCreation.type == "folder" && (
          <FileFolderCreateInput type="folder" padding={padding + 3} parent={parent_id} />
        )}
      {children.folders.map((obj) => (
        <Folder
          obj={obj}
          parent={parent_id}
          key={obj.id}
          padding={padding + 3}
          isActive={activeElement == obj.id}
        />
      ))}

      {elementCreation &&
        elementCreation.parent == parent_id &&
        elementCreation.type == "file" && (
          <FileFolderCreateInput type="file" padding={padding + 3} parent={parent_id} />
        )}
      {children.files.map((obj) => (
        <File
          obj={obj}
          parent={parent_id}
          key={obj.id}
          padding={padding + 3}
          isActive={activeElement == obj.id}
        />
      ))}
    </>
  );
};

export default Directory;
