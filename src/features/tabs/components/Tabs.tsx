import { AiFillHtml5 } from "react-icons/ai";
import SingleTab from "./SingleTab";
import { useAppSelector } from "../../../redux/hooks";

const Tabs = () => {
  const tab_ids = useAppSelector((state) => state.tabs.tabs);
  const active_tab = useAppSelector((state) => state.tabs.activeTab);
  const elements = useAppSelector((state) => state.fileTree.elements);

  const tab_objs = tab_ids.map((id) => elements[id]);

  return (
    <div className="flex bg-[#191919] text-sm">
      {tab_objs.map((tab) => (
        <SingleTab
          active={active_tab == tab.id}
          key={tab.id}
          tab={tab}
        />
      ))}
    </div>
  );
};

export default Tabs;
