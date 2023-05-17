import { useHotkeys } from "react-hotkeys-hook";
import { setLeftActive, setRightActive } from "../../../redux/editor/tabSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import useShowActiveTab from "../hooks/useShowActiveTab";
import SingleTab from "./SingleTab";

const Tabs = () => {
  const dispatch = useAppDispatch();

  const tab_ids = useAppSelector((state) => state.tabs.tabs);
  const active_tab = useAppSelector((state) => state.tabs.activeTab);
  const elements = useAppSelector((state) => state.fileTree.elements);

  const ref = useHorizontalScroll();
  useShowActiveTab(ref);

  useHotkeys("ctrl+alt+left", () => dispatch(setLeftActive(active_tab)), {
    preventDefault: true,
    enableOnFormTags: true,
  });

  useHotkeys("ctrl+alt+right", () => dispatch(setRightActive(active_tab)), {
    preventDefault: true,
    enableOnFormTags: true,
  });

  const tab_objs = tab_ids.map((id) => elements[id]);

  return (
    <div
      ref={ref}
      className="flex overflow-x-auto bg-[#191919] text-sm scrollbar-thin scrollbar-thumb-slate-200"
    >
      {tab_objs.map((tab) => (
        <SingleTab active={active_tab == tab.id} key={tab.id} tab={tab} />
      ))}
    </div>
  );
};

export default Tabs;
