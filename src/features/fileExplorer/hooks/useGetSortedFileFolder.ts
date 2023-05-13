import { ElementType, ElementsType } from "../../../redux/editor/fileTreeSlice";

const filterAndSortByName = (content: ElementType[], type: string) => {
  return content
    .filter((c) => c.type == type)
    .sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
};

export default function useGetSortedFileFolder(content: ElementType[]) {
  let files = filterAndSortByName(content, "file");
  let folders = filterAndSortByName(content, "folder");
  return { files, folders };
}
