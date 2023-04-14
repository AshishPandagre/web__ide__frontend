import React, { useState } from "react";
import { AiFillGithub, AiOutlineSearch, AiOutlineTeam } from "react-icons/ai";
import { TfiFiles } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import SingleItem from "./SingleItem";
import FileExplorer from "../../features/fileExplorer/components/FileExplorer";
import Search from "../../features/search/components/Search";
import Room from "../../features/room/components/Room";
import Settings from "../../features/settings/components/Settings";

export type ActivityBarType = "file-explorer" | "search" | "room" | "settings";

const ActivityBar = () => {
  const [active, setActive] = useState<ActivityBarType>("file-explorer");

  const onClick = (x: ActivityBarType) => {
    setActive(x);
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
            isActive={active == "room"}
            setActive={() => onClick("room")}
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
      {active == "room" && <Room />}
      {active == "settings" && <Settings />}
    </>
  );
};

export default ActivityBar;
