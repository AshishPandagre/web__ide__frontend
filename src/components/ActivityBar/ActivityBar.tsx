import React, { useEffect, useState } from "react";
import { AiFillGithub, AiOutlineSearch, AiOutlineTeam } from "react-icons/ai";
import { TfiFiles } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import SingleItem from "./SingleItem";
import FileExplorer from "../../features/fileExplorer/components/FileExplorer";
import Search from "../../features/search/components/Search";
import Room from "../../features/room/components/Room";
import Settings from "../../features/settings/components/Settings";
import { useHotkeys } from "react-hotkeys-hook";

export type ActivityBarType = "file-explorer" | "search" | "members" | "settings";

export type shortcutType = {
  [key: string]: () => void;
};

interface ActivityBarPropsType {
  openSidebar: () => void;
  toggleSidebar: () => void;
}

const ActivityBar: React.FC<ActivityBarPropsType> = ({ openSidebar, toggleSidebar }) => {
  const [active, setActive] = useState<ActivityBarType>("file-explorer");

  const shortcuts: shortcutType = {
    "ctrl+shift+e": () => setActive("file-explorer"),
    "ctrl+shift+f": () => setActive("search"),
    "ctrl+shift+m": () => setActive("members"),
    "ctrl+shift+x": () => setActive("settings"),
  };

  Object.keys(shortcuts).map((shortcut) => {
    useHotkeys(shortcut, shortcuts[shortcut], {
      preventDefault: true,
      enableOnFormTags: true,
    });
  });

  const onClick = (x: ActivityBarType) => {
    if (x != active) {
      setActive(x);
      openSidebar();
    } else toggleSidebar();
  };

  return (
    <>
      <div className="sticky top-0 flex h-full w-12 flex-shrink-0 flex-col justify-between border-r border-gray-700 bg-[#252525]">
        <div>
          <SingleItem
            isActive={active == "file-explorer"}
            setActive={() => onClick("file-explorer")}
            Icon={TfiFiles}
          />
          <SingleItem
            isActive={active == "search"}
            setActive={() => onClick("search")}
            Icon={AiOutlineSearch}
          />
          <SingleItem
            isActive={active == "members"}
            setActive={() => onClick("members")}
            Icon={AiOutlineTeam}
          />
          <SingleItem
            isActive={active == "settings"}
            setActive={() => onClick("settings")}
            Icon={FiSettings}
          />
        </div>
        <div className="flex cursor-pointer justify-center text-center">
          <AiFillGithub size={25} className="h-12 opacity-40" />
        </div>
      </div>
      {active == "file-explorer" && <FileExplorer />}
      {active == "search" && <Search />}
      {active == "members" && <Room />}
      {active == "settings" && <Settings />}
    </>
  );
};

export default ActivityBar;
